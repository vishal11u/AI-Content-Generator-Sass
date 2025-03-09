"use client";
import { Button } from "@/components/ui/button";
import { useActive } from "@/context/ActiveContext";
import { useAiOutput } from "@/context/AiOutputContext";
import { useSubscription } from "@/context/SubscriptionContext";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

function UsageTrack() {
  const { user } = useUser();
  const { aiOutpoot } = useAiOutput();
  const { isActive } = useActive();
  const { isSubscribed, setIsSubscribed } = useSubscription();
  const [totalUsage, setTotalUsage] = useState<number>(0);

  const CREDIT_LIMIT = isSubscribed ? 100000 : 10000;

  const fetchData = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    try {
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

      if (result.length > 0) {
        const total = result.reduce(
          (acc, item) => acc + (item.aiResponse?.length || 0),
          0
        );
        setTotalUsage(Math.min(total, CREDIT_LIMIT));
      }
    } catch (error) {
      console.error("Error fetching AI output usage:", error);
    }
  };

  const checkUserSubscription = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    try {
      const result = await db
        .select()
        .from(UserSubscription)
        .where(eq(UserSubscription.email, user.primaryEmailAddress.emailAddress));

      setIsSubscribed(result.length > 0);
    } catch (error) {
      console.error("Error checking user subscription:", error);
    }
  };

  useEffect(() => {
    fetchData();
    checkUserSubscription();
  }, [user, aiOutpoot, isActive]);

  return (
    <div className="mt-5">
      <div className="bg-indigo-500 text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-indigo-200 w-full rounded-full mt-2">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: `${(totalUsage / CREDIT_LIMIT) * 100}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-1">
          {totalUsage}/{CREDIT_LIMIT.toLocaleString()} Credits Used
        </h2>
      </div>
      {!isSubscribed && (
        <Button
          variant="secondary"
          className="w-full text-indigo-500 my-3 cursor-pointer py-1"
        >
          Upgrade
        </Button>
      )}
    </div>
  );
}

export default UsageTrack;
