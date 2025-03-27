import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://erhwwnmbkpmknwdwkwyp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyaHd3bm1ia3Bta253ZHdrd3lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDQwMDQsImV4cCI6MjA1NzAyMDAwNH0.sW44Xa-Loflm51z7dGIAoCV5GXZlU8yDf-z0euxd3mg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);