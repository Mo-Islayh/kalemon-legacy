"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const UnderlineTabs = ({ data, handleTabClick, className }: any) => {
  const [activeTab, setActiveTab] = useState(data[0]?.name);

  const onClickTab = (name: any, key: any, id: any) => {
    setActiveTab(name);
    handleTabClick(key, id);
  };
  return (
    <Tabs value={activeTab} className={className}>
      <TabsHeader
        className="border-primary-k-gray-tab rounded-none border-b-4 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent  border-b-4 border-primary-k-divider-blue shadow-none rounded-none top-1",
        }}
      >
        {data?.map(({ name, id }: any, key: any) => (
          <Tab
            key={key}
            value={name}
            onClick={() => onClickTab(name, key, id)}
            className={
              activeTab === name
                ? "size-16px h-12 text-gray-900"
                : "size-16px h-12"
            }
          >
            {name}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="h-[93%]">
        {data?.map(({ name, description }: any, key: any) => (
          <TabPanel key={key} value={name} className="h-full p-0 pt-8">
            {description}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default UnderlineTabs;
