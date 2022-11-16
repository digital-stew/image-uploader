"use client";
import "./global.css";
import Navbar from "../components/Navbar";
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
          {test && <Link href="/gallery">gallery</Link>}
        </header>
        <button onClick={() => setTest(!test)}>click</button>
        {children}

        <footer>
          <Navbar />
        </footer>
      </body>
    </html>
  );
}
