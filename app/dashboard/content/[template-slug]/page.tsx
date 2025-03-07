"use client";
import React, { useState, useEffect } from "react";
import FormSection from "../_components/FormSection";
import OutPutSection from "../_components/OutPutSection";
import { TEMPLATE } from "../../_components/TemplateSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { useParams } from "next/navigation";
import { AIOutput } from "@/utils/Schema";
import { db } from "@/utils/db";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { useAiOutput } from "@/context/AiOutputContext";

function CreateContent() {
  const params = useParams();
  const { aiOutpoot, setAiOutpoot } = useAiOutput();
  const [selectedTemplate, setSelectedTemplate] = useState<
    TEMPLATE | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useUser();

  useEffect(() => {
    if (params && "template-slug" in params) {
      const template = Templates?.find(
        (t) => t?.slug === params["template-slug"]
      );
      setSelectedTemplate(template);
    }
  }, [params]);

  const GenerateAIContent = async (formData: any) => {
    if (!selectedTemplate) {
      console.error("Selected template is missing.");
      return;
    }

    setLoading(true);
    const FinalAIPrompt =
      JSON.stringify(formData) + ", " + selectedTemplate.aiPrompt;

    try {
      const result = await chatSession.sendMessage(FinalAIPrompt);
      setAiOutpoot(result.response.text());
      await SaveInDb(
        JSON.stringify(formData),
        selectedTemplate?.slug,
        result.response.text()
      );
    } catch (error) {
      console.error("Error sending AI prompt:", error);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    try {
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD/MM/yyyy"),
      });

      return result;
    } catch (error) {
      console.error("Error saving to DB:", error);
      throw error;
    }
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button variant="ghost" className="cursor-pointer">
          <ArrowLeft /> Go Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(e: any) => GenerateAIContent(e)}
          loading={loading}
        />

        <div className="col-span-1">
          <OutPutSection aiOutpoot={aiOutpoot} />
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
