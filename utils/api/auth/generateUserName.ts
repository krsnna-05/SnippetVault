export function generateUsername(displayName: string) {
  let base = displayName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  if (!base) base = "user";

  const random = Math.floor(100 + Math.random() * 900);

  return `${base}-${random}`;
}
