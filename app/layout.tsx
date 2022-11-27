"use client";
import "./global.css";
import Link from "next/link";
import { useState } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>

        {children}
        <footer>
          <p>CAUTION!! all uploaded files are public </p>
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
