import supabase from "../services/supabase";

export default async function createMessage(message) {
  const { data, error } = await supabase
    .from("messages")
    .insert([message])
    .select();
  return { data, error };
}
