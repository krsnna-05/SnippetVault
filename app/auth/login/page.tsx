import { Login } from "@/components/login";

const LoginPage = () => {
  return (
    <main className="flex-1">
      <Login signupUrl="/auth/signin" />
    </main>
  );
};

export default LoginPage;
