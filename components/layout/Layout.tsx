import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
