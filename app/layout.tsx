import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FleetInfoSync - Modern infotainment system integration for Japanese automotive market',
  description: 'Value Proposition: Bridges outdated car infotainment systems with smartphone functionality for Japanese drivers who currently ignore built-in systems. Provides seamless navigation, entertainment, and connectivity.

Target Customer: Japanese automotive OEMs, aftermarket infotainment suppliers, and fleet management companies serving tech-savvy consumers

---
Category: Micro-SaaS
Target Market: Japanese automotive OEMs, aftermarket infotainment suppliers, and fleet management companies serving tech-savvy consumers
Source Hypothesis ID: e77e083a-5d15-4d2c-9060-a0df9952d7a2
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">FleetInfoSync - Modern infotainment system integration for Japanese automotive market</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
