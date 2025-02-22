"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/contants/routes";

const SocialAuth = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.error(error);
      toast("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="Google Logo"
          className="mr-2.5 object-contain"
        />
        Google
      </Button>

      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="Github Logo"
          className="invert-colors mr-2.5 object-contain"
        />
        Github
      </Button>
    </div>
  );
};

export default SocialAuth;
