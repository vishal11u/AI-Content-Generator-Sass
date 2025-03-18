"use client";
import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { TEMPLATE } from "@/types/main-types";

function TemplateSection({ searchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (searchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(templateList);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 md:p-10 h-auto bg-slate-100">
      {templateList?.map((data: TEMPLATE, i: number) => (
        <TemplateCard key={i} {...data} />
      ))}
    </div>
  );
}

export default TemplateSection;
