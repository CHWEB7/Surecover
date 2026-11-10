"use client";

import { useEffect, type ReactNode } from "react";

/** Force document cream background off on the contact page. */
export function ContactPageShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.backgroundColor;
    const prevBody = body.style.backgroundColor;
    html.style.backgroundColor = "#ffffff";
    body.style.backgroundColor = "#ffffff";
    return () => {
      html.style.backgroundColor = prevHtml;
      body.style.backgroundColor = prevBody;
    };
  }, []);

  return <>{children}</>;
}
