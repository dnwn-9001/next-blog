import { createClient } from "@supabase/supabase-js";

// supabase 인스턴스가 중복 생성되지 않도록 글로벌 변수 활용
const globalForSupabase = globalThis as {
  supabase?: ReturnType<typeof createClient>;
};

if (!globalForSupabase.supabase) {
  globalForSupabase.supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false, // Magic Link 자동 리디렉트 방지
      },
    }
  );
}

export const supabase = globalForSupabase.supabase;
