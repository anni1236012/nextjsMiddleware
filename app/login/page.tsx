"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useGlobalContextProvider } from "@/app/context/globalContext";
export default function Login() {
  const { session, setSession } = useGlobalContextProvider();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();
  const handleSignIn = async () => {
    // Send session to API to create JWT cookie
    const jwtResponse = await fetch("/api/login", {
      method: "GET",
    });

    const { success } = await jwtResponse.json();
    setSession(true);
    router.push("/");
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <button
        className="text-white px-4 py-2 mb-6 font-bold  bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        onClick={handleSignIn}
      >
        {"Click to Login"}
      </button>
    </div>
  );
}
