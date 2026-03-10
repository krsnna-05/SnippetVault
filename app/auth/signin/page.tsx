import { Signin } from "@/components/signin";
import React from "react";

const SignIn = () => {
  return (
    <main className="flex-1">
      <Signin
        logo={{
          url: "/",
          src: "/logo.png",
          alt: "Logo",
          title: "SnippetVault",
        }}
      />
    </main>
  );
};

export default SignIn;
