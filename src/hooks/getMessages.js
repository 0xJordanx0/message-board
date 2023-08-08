import supabase from "../services/supabase";

export default async function getMessages() {
  const { data, error } = await supabase.from("messages").select("*");
  return data;
}