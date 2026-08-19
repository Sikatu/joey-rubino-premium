import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "Contact Joey Rubino by phone or email, or learn more about his work across recovery support, fitness, and interventions.",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}