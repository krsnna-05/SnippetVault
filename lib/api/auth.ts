import { generateUsername } from "@/utils/api/auth/generateUserName";
import { supabase } from "../supabase";

export async function signUp({
  displayName,
  email,
  password,
}: {
  displayName: string;
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName,
      },
    },
  });

  if (error) throw error;

  const username = generateUsername(displayName);

  if (data.user) {
    await supabase.from("profiles").insert({
      id: data.user.id,
      display_name: displayName,
      username: username,
    });
  }

  return data;
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}
