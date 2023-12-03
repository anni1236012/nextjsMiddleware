"use client";
import Link from "next/link";
import { useGlobalContextProvider } from "@/app/context/globalContext";
export default function Navbar() {
  const { session, setSession } = useGlobalContextProvider();
  return (
    <div>
      <nav className="sticky inset-0 flex justify-end p-4">
        <ul className=" flex gap-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:underline">
              Team
            </Link>
          </li>
          <li>
            <Link href="/chat" className="hover:underline">
              Chat
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>

          {session && (
            <li>
              <Link
                href="/logout"
                className="p-2 rounded-xl text-slate-300 bg-blue-700 hover:bg-blue-800"
                onClick={() => setSession(false)}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
