import { NextSeoProps } from "next-seo";

export const config = {
  siteName: "كلمن",
  title: "كلمن",
  description: "كلمن",
  locale: "ar_AR",
  twitterHandle: "",
  twitterCardType: "summary_large_image",
  facebookPage: "",
};

type SeoConfigType = {
  canonicalUrl?: string;
};

export interface SEOProps extends NextSeoProps {
  dangerouslySetAllPagesToNoFollow?: boolean;
  dangerouslySetAllPagesToNoIndex?: boolean;
}

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

export function createSEOConfig({ canonicalUrl }: SeoConfigType): SEOProps {
  return {
    title: config.title,
    description: config.description,
    titleTemplate: "%s - kalemon",
    defaultTitle: config.siteName,
    dangerouslySetAllPagesToNoFollow: !isProduction,
    dangerouslySetAllPagesToNoIndex: !isProduction,
    canonical: canonicalUrl,
    openGraph: {
      type: "website",
      locale: config.locale,
      url: canonicalUrl,
      title: config.title,
      description: config.description,
      images: [
        {
          url: "/assets/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: config.siteName,
        },
      ],
      site_name: config.siteName,
    },
    twitter: {
      handle: config.twitterHandle,
      site: config.twitterHandle,
      cardType: config.twitterCardType,
    },
    additionalMetaTags: [
      {
        property: "fb:pages",
        content: config.facebookPage,
      },
      {
        name: "Charset",
        content: "UTF-8",
      },
      {
        name: "Distribution",
        content: "Global",
      },
      {
        name: "Rating",
        content: "General",
      },
      {
        name: "theme-color",
        content: "#fff",
      },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      },
      {
        name: "coverage",
        content: "worldwide",
      },
      {
        name: "robots",
        content: "all",
      },
      {
        name: "robots",
        content: "index,follow",
      },
      {
        name: "author",
        content: "كلمن",
      },
      {
        name: "keywords",
        content: "كلمن",
      },
      {
        content: "IE=edge",
        httpEquiv: "X-UA-Compatible" as any,
      },
      {
        name: "geo.country",
        content: "jordan",
      },
      {
        name: "geo.placename",
        content: "jordan",
      },
      {
        name: "og:locale:alternate",
        content: "ar_En",
      },
      {
        name: "audience",
        content: "all",
      },
      {
        name: "generator",
        content: "blogger",
      },
      {
        name: "revisit",
        content: "5 days",
      },
      {
        name: "revisit-after",
        content: "5 days",
      },
      {
        name: "document",
        content: "resource-type",
      },
      {
        name: "msvalidate.01",
        content: "684BF8442538FDAF0DDBB34E46CC31A3",
      },
    ],
  };
}
