import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, score } = body;

    const { error } = await supabase
      .from('eval3trim')
      .insert({
        name,
        score,
      });

    if (error) {
      console.error("Error al insertar en Supabase:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Resultados guardados correctamente' });
  } catch (err) {
    console.error("Error en API:", err);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
