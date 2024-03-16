import Image from "next/legacy/image";
import React from "react";

const NotAuthNavbar = () => {
  return (
    <header className="flex flex-col items-center justify-center">
      <hr className="h-4 w-full border-none bg-primary-k-divider-blue" />
      <div className="m-6">
        <Image
          src={"/assets/images/kalemon-logo.svg"}
          width={115}
          height={55}
          alt="kalemon logo | كلمن"
          priority
        />
      </div>
    </header>
  );
};

export default NotAuthNavbar;
