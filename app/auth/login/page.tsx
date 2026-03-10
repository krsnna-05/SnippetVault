import { Login } from "@/components/login";

const LoginPage = () => {
  return (
    <main className="flex-1">
      <Login
        logo={{
          url: "/",
          src: "/logo.png",
          alt: "Logo",
          title: "SnippetVault",
        }}
        signupUrl="/auth/signin"
      />
    </main>
  );
};

export default LoginPage;
