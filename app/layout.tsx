"use client";
import "./global.css";
import Link from "next/link";
import { useState } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [test, setTest] = useState(false);
  return (
    <html>
      <head />
      <body>
        <header>
          <Link href="/">upload</Link>
          <Link href="/gallery">gallery</Link>
        </header>
        {children}
        <footer>
          created by
          <Link href="https://tux-systems.co.uk">Stewart Ridings</Link>
          {"  -  "}
          <Link href="https://devchallenges.io/portfolio/digital-stew">
            devChallenges.io
          </Link>
        </footer>
      </body>
    </html>
  );
}
