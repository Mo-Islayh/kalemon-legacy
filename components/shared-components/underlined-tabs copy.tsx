"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useRouter } from "next/router";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const UnderlineTabs = ({ data, handleTabClick, className }: any) => {
  const [activeTab, setActiveTab] = useState(data[0]?.name);

  const { locale } = useRouter();

  const onClickTab = (name: any, key: any, id: any) => {
    setActiveTab(name);
    handleTabClick(key, id);
  };
  return (
    <ScrollArea dir={locale === "ar" ? "rtl" : "ltr"}>
      <Tabs
        defaultValue="phone"
        className="w-full "
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <TabsList className="h-[60px] w-full justify-between bg-transparent border-b-4">
          {data?.map(({ name, id }: any, key: any) => (
            <TabsTrigger
              key={key}
              value={name}
              onClick={() => onClickTab(name, key, id)}
              className={
                activeTab === name
                  ? "size-16px h-16 border-b-4  border-primary-k-divider-blue text-gray-900"
                  : "size-16px h-16  "
              }
            >
              {name}
            </TabsTrigger>
          ))}
        </TabsList>

        {data?.map(({ name, description }: any, key: any) => (
          <TabsContent key={key} value={name}>
            {description}
          </TabsContent>
        ))}
      </Tabs>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default UnderlineTabs;
