import { Toaster } from "sonner";
import "./globals.css";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
