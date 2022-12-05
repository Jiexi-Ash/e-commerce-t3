import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

function MainLayout({ children, title = "E-commerce" }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Online shop to buy clothes and accessories"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <div className="container mx-auto  max-w-7xl px-4">{children}</div>
      </main>
    </>
  );
}

export default MainLayout;
