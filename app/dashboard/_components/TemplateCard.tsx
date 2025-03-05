import React from "react";
import { TEMPLATE } from "./TemplateSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(data: TEMPLATE) {
  return (
    <Link href={'dashboard/content/' + data?.slug}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={data.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg">{data.name}</h2>
        <p className="text-gray-500 line-clamp-3">{data.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
