import { Navbar } from "@/components/navbar";

export default function MainLayout({
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
            title: "SignUp",
            url: "/auth/signin",
          },
        }}
      />
      {children}
    </>
  );
}
