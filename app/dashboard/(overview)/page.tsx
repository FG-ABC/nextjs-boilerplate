import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default async function Page() {
  // const revenue = await fetchRevenue();
  return <main>Dashboard</main>;
}
