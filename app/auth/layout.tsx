import { Navbar } from "@/components/navbar";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar
        logo={{
          url: "/",
          src: "/logo.png",
          alt: "SnippetVault Logo",
          title: "SnippetVault",
        }}
        menu={[]}
        auth={{
          login: {
            title: "Login",
            url: "/auth/login",
          },
          signup: {
            title: "Sign up",
            url: "/auth/signin",
          },
        }}
      />
      {children}
    </>
  );
}
