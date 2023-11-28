import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wwjpvlgekqydltweyzib.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3anB2bGdla3F5ZGx0d2V5emliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NDExMzAsImV4cCI6MjAxNDQxNzEzMH0.xnLD9SdJFOO1zepDptgp4dZIH25jdUXsaxuAs72LSfA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
