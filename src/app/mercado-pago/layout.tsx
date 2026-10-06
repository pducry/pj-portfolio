"use client";

import { usePathname } from "next/navigation";
import { PasswordGate } from "@/components/password-gate";

export default function MercadoPagoLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isIndex = pathname.replace(/\/$/, "") === "/mercado-pago";

  if (isIndex) return <>{children}</>;

  return (
    <PasswordGate password="pjpj" storageKey="pj-mp-auth">
      {children}
    </PasswordGate>
  );
}
