import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Standard Arabia Inspection Co. Ltd - Saudi Arabia",
  description:
    "Standard Arabia Inspection Co. Ltd has been established at Al Jubail – Saudi Arabia as a Third-Party Inspection, Training, Material testing, NDT & certification provider with branches at Riyadh, Jeddah, Yanbu, Jazan, Shuqaiq, tabuk, Turaif, NEOM, At taif, Dammam, Jubail & Bahrain.",
  keywords: [
    "Standard Arabia",
    "Inspection Saudi Arabia",
    "Third Party Inspection",
    "Lifting Equipment Inspection",
    "Safety Training",
    "NDT Services",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
