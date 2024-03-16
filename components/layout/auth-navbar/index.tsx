import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Icons = dynamic(() => import("./icons"), {
  ssr: false,
});

const AuthNavigation = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("navbar");

  const SessionItems = [
    {
      name: t("one-to-one"),
      link: "",
    },
    {
      name: t("one-to-many"),
      link: "",
    },
  ];
  return (
    <div className="min-h-[80px] w-full bg-primary-k-white-auth px-4 shadow-md">
      <div className="mx-auto flex h-full min-h-[80px] max-w-[1280px] items-center justify-between  ">
        <div className="flex h-full w-full items-center justify-start gap-16">
          <Logo />
          <div className={classNames("hidden gap-6 md:flex")}>
            <DropItem text={t("categories")} items={[]} />
            <DropItem text={t("live-sessions")} items={SessionItems} />
            <NavItem text={t("courses")} navigateTo={"/courses"} />
            <NavItem text={t("instructors")} navigateTo={"/instructors"} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className={classNames("hidden sm:flex")}>
            <Icons locale={locale} t={t} />
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default AuthNavigation;

const DropItem = ({ text, items }: any) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center justify-center gap-1">
          <p className="k-font-light  flex cursor-pointer whitespace-nowrap text-secondary-paragraph-txt hover:text-primary-k-divider-blue">
            {text}
          </p>
          <i className="size-16px ri-arrow-down-s-line" />
        </div>
      </HoverCardTrigger>
      {items.length > 0 && (
        <HoverCardContent className="w-60">
          <div className="flex justify-between space-x-4">
            {items?.map((item: any, _id: number) => (
              <Link href={item?.link} key={_id}>
                <p className="k-font-light  flex cursor-pointer text-secondary-paragraph-txt hover:text-primary-k-divider-blue ">
                  {item?.name}
                </p>
              </Link>
            ))}
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

const NavItem = ({ text, navigateTo }: any) => {
  return (
    <Link href={navigateTo} className="size-16px">
      <p className="k-font-light  cursor-pointer text-secondary-paragraph-txt hover:text-primary-k-divider-blue">
        {text}
      </p>
    </Link>
  );
};

const Logo = () => {
  const router = useRouter();
  return (
    <button className="min-w-[100px]" onClick={() => router.push("/")}>
      <Image
        src="/assets/images/kalemon-logo.svg"
        width={100}
        height={48}
        alt="kalemon logo"
        priority
        className="cursor-pointer"
      />
    </button>
  );
};

const Buttons = () => {
  const { t } = useTranslation("navbar");
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <div className="h-8 w-[77px]">
        <Button
          variant={"outline"}
          onClick={() => router.push("/login")}
          className="k-font-light h-full w-full rounded border-primary-k-divider-blue text-sm  text-primary-k-divider-blue"
        >
          {t("login")}
        </Button>
      </div>

      <div className="h-8 w-[77px]">
        <Button
          variant={"default"}
          onClick={() => router.push("/registration")}
          className="k-font-regular h-8 w-[77px] rounded border-none  bg-primary-k-divider-blue text-sm text-white"
        >
          {t("register")}
        </Button>
      </div>
    </div>
  );
};
