import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";

const Footer = () => {
  const { t } = useTranslation("footer");

  const socialMediaIcons = [
    "ri-youtube-fill",
    "ri-whatsapp-fill",
    "ri-twitter-fill",
    "ri-instagram-line",
    "ri-facebook-fill",
  ];
  const links = [
    [
      { text: t("about-kalemon"), link: "/" },
      { text: t("join-as-instructor"), link: "/" },
      { text: t("contact-us"), link: "/" },
    ],

    [
      { text: t("help"), link: "/" },
      { text: t("terms-conditions"), link: "/" },
      { text: t("privacy-policy"), link: "/" },
    ],
    [
      { text: t("download-android-app"), link: "/" },
      { text: t("download-ios-app"), link: "/" },
      { text: t("download-desktop-android-app"), link: "/" },
      { text: t("download-desktop-ios-app"), link: "/" },
    ],
  ];
  return (
    <footer className="w-full">
      <div className="mt-48 flex h-[272px] w-full items-center  bg-primary-k-white-auth">
        <div className="m-auto flex h-44 w-[83%]  max-w-[1200px] justify-start">
          <div className="flex w-[580px] justify-between">
            {links.map((group, key) => (
              <div key={key}>
                {group.map(({ text, link }, index) => (
                  <p
                    className={classNames(
                      "size-14px k-font-light cursor-pointer text-primary-k-navey hover:text-primary-k-divider-blue",
                      {
                        "mt-3 ": index != 0,
                      },
                    )}
                    key={index}
                  >
                    <Link href={link}>{text} </Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-[74px] w-full items-center bg-primary-k-divider-blue">
        <div className="m-auto flex w-[83%] max-w-[1200px] items-center justify-between">
          <p className="size-18px k-font-light text-primary-k-white">
            {t("all-rights-reserved")}
          </p>
          <div className="flex w-1/5 justify-between">
            {socialMediaIcons.map((icon, key) => (
              <i
                className={`${icon} size-25px text-primary-k-white`}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
