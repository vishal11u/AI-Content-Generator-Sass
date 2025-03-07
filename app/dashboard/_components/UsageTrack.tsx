"use client";
import { Button } from "@/components/ui/button";
import { useAiOutput } from "@/context/AiOutputContext";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

const CREDIT_LIMIT = "10,000";

function UsageTrack() {
  const { user } = useUser();
  const { aiOutpoot } = useAiOutput();
  const [totalUsage, setTotalUsage] = useState<number>(0);

  const fetchData = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

      if (result) {
        let total = 0;
        result.forEach((element) => {
          total += Number(element.aiResponse?.length);
        });

        setTotalUsage(
          total > Number(CREDIT_LIMIT) ? Number(CREDIT_LIMIT) : total
        );
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [user, aiOutpoot]);

  return (
    <div className="mt-5">
      <div className="bg-indigo-500 text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-indigo-200 w-full rounded-full mt-2">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: `${Math.min(
                (totalUsage / Number(CREDIT_LIMIT)) * 100,
                100
              )}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-1">
          {totalUsage}/{CREDIT_LIMIT} Credits Used
        </h2>
      </div>
      <Button
        variant="secondary"
        className="w-full text-indigo-500 my-3 cursor-pointer py-1"
      >
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
