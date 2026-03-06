"use client";

import { useState, useEffect } from "react";

const PASS = "pjpj";
const STORAGE_KEY = "pj-auth";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthed(true);
    }
  }, []);

  if (!mounted) return null;
  if (authed) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>

        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          autoFocus
          className={`w-48 border-b bg-transparent pb-2 text-center text-sm tracking-widest text-foreground outline-none transition-colors placeholder:text-muted ${
            error ? "border-red-500" : "border-border focus:border-foreground"
          }`}
        />

        <button
          type="submit"
          className="text-xs text-muted transition-colors hover:text-foreground"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
