"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/works");
  }, [router]);

  return (
    <div className="flex min-h-svh items-center justify-center bg-background">
      <p className="text-sm text-muted animate-fade-in">Redirecting…</p>
    </div>
  );
}
