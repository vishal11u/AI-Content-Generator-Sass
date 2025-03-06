"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface props {
  selectedTemplate?: TEMPLATE;
  userFormInput?: any;
  loading?: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: props) {
  const [inputData, setInputData] = useState<any>("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(inputData);
  };

  return (
    <div className="p-5 shadow-md bg-white rounded-lg border">
      <Image
        src={selectedTemplate?.icon || ""}
        alt="icon"
        width={70}
        height={70}
      />
      <h2 className="font-bold mb-2 text-2xl text-indigo-500">
        {selectedTemplate?.name}
      </h2>
      <p className="font-sm text-gray-500">{selectedTemplate?.desc}</p>

      <form className="mt-7" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item?.name}
                required={item?.reuired}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item?.name}
                required={item?.reuired}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button
          disabled={loading}
          type="submit"
          className="bg-indigo-500 cursor-pointer w-full py-6"
        >
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
