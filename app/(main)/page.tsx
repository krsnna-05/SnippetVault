import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="container mx-auto flex-1 flex flex-col items-center justify-center">
      <Hero
        heading="Modern Code Snippet Management"
        description="A modern code snippet manager built with Next.js, Supabase, and TanStack Query. Create, organize, and securely share snippets with public and private access controls."
        button={{
          text: "Get Started",
          url: "/auth/signin",
        }}
        reviews={{
          count: 200,
          rating: 5.0,
          avatars: [
            {
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
              alt: "Developer avatar 1",
            },
            {
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
              alt: "Developer avatar 2",
            },
            {
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
              alt: "Developer avatar 3",
            },
            {
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
              alt: "Developer avatar 4",
            },
            {
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
              alt: "Developer avatar 5",
            },
          ],
        }}
      />
    </main>
  );
}
