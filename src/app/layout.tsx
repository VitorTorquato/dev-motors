import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";



export const metadata: Metadata = {
  title: "Dev motors - sua oficina especializada",
  description: "Oficina de carros personalizada",
  keywords:['oficina' , 'carros' , 'manutencao de carros'],
  openGraph:{
    title: "Dev motors - sua oficina especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
  },
  robots:{
    index:true,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <p style={{textAlign: 'center' , marginTop:54}}>Todos os direittos reservados @{`${new Date().getFullYear()}`}</p>
      </body>
    </html>
  );
}
