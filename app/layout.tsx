import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
    >
      <body suppressHydrationWarning>
        {children}
        <Toaster theme="dark" position="top-right" richColors closeButton/>
      </body>
    </html>
  );
}
