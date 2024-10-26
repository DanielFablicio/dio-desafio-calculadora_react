import "./globals.css";

export const metadata = {
  title: "Dio Calculadora",
  description: "Gerado com create-nex-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
