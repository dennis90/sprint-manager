import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pgaifblorgpwljitpjge.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzM5NDc5MiwiZXhwIjoxOTUyOTcwNzkyfQ.GCfSjOH5BTA8dfy_YjwEqbplRaYGd_q2cUW66DqqGq8"
);

export default supabase;
