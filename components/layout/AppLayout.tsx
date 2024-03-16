import React from "react";
import NotAuthNavbar from "./not-auth-navbar";
import AuthNavbar from "./auth-navbar";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  const currentPath = usePathname();
  const { locale } = useRouter();
  const notAuthPaths = [
    "/login",
    "/registration",
    "/otp",
    "/en/login",
    "/en/registration",
    "/en/otp",
    "/ar/login",
    "/ar/registration",
    "/ar/otp",
  ];
  const isNotAuthPath = notAuthPaths.includes(currentPath);
  return (
    <main
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      style={{
        direction: locale === "ar" ? "rtl" : "ltr",
      }}
    >
      {isNotAuthPath ? <NotAuthNavbar /> : <AuthNavbar />}
      <div className="children-wrapper">{children}</div>
      {!isNotAuthPath && <Footer />}
    </main>
  );
}

export default AppLayout;
