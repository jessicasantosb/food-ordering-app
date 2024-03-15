import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Food Delivery App",
  description: "App para pedido de delivery de comidas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto border p-4">{children}</main>
      </body>
    </html>
  );
}
