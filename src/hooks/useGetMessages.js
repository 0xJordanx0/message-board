import supabase from "../services/supabase";

export default async function getData() {
  const { data } = await supabase.from("messages").select("*");
  return data;
}
