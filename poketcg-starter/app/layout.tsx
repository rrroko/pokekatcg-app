export const metadata = { title: "PokéTCG App", description: "PokéPoké風対戦 & シミュ & ログ" };
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
