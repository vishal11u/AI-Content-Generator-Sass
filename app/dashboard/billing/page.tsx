"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import moment from "moment";
import { UserSubscription } from "@/utils/Schema";
import { useSubscription } from "@/context/SubscriptionContext";

const SubscriptionPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { isSubscribed } = useSubscription();

  const CreateSubscription = async () => {
    setLoading(true);
    try {
      const resp = await axios.post("/api/create-subscriptions", {});
      OnPayment(resp.data.id);
    } catch (error) {
      console.error("Error creating subscription:", error);
    } finally {
      setLoading(false);
    }
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
      subscription_id: subId,
      name: "AI-Content-Generator",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        if (resp) {
          SaveSubscription(resp.razorpay_payment_id);
        }
      },
    };

    if (typeof window !== "undefined") {
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      console.error("Razorpay is not available");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const SaveSubscription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentId: paymentId,
        joinDate: moment().format("DD/MM/yyyy"),
      });

      if (result) {
        window.location.reload();
      }
      return result;
    } catch (error) {
      console.error("Error saving subscription:", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-auto bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Upgrade With Monthly Plan
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        {/* Free Plan */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 flex flex-col relative">
          <div className="absolute top-0 right-0">
            <div className="bg-gray-500 text-white px-3 sm:px-4 py-1 rounded-tr-lg rounded-bl-lg text-xs sm:text-lg">
              Free
            </div>
          </div>
          <div className="text-center mb-4 sm:mb-6">
            <div className="mt-2 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                0$
              </span>
              <span className="text-gray-500 ml-1 text-sm sm:text-base">
                /month
              </span>
            </div>
          </div>

          <div className="flex-grow space-y-3 sm:space-y-4">
            <Feature text="10,000 Words/Month" />
            <Feature text="50+ Content Templates" />
            <Feature text="Unlimited Download & Copy" />
            <Feature text="1 Month of History" />
          </div>

          <button className="mt-6 sm:mt-8 w-full py-2 sm:py-3 px-4 sm:px-6 rounded-md bg-gray-600 text-white font-medium hover:bg-gray-700 transition-colors text-sm sm:text-base">
            Currently Active Plan
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 flex flex-col relative">
          <div className="absolute top-0 right-0">
            <div className="bg-blue-400 text-white px-3 sm:px-4 py-1 rounded-tr-lg rounded-bl-lg text-xs sm:text-lg">
              Monthly
            </div>
          </div>

          <div className="text-center mb-4 sm:mb-6">
            <div className="mt-2 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                9.99$
              </span>
              <span className="text-gray-500 ml-1 text-sm sm:text-base">
                /month
              </span>
            </div>
          </div>

          <div className="flex-grow space-y-3 sm:space-y-4">
            <Feature text="1,000,000 Words/Month" />
            <Feature text="50+ Template Access" />
            <Feature text="Unlimited Download & Copy" />
            <Feature text="1 Year of History" />
          </div>

          <button
            onClick={CreateSubscription}
            disabled={loading || isSubscribed}
            className={`mt-6 sm:mt-8 w-full py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium flex items-center justify-center text-sm sm:text-base transition-colors
        ${
          isSubscribed
            ? "bg-gray-600 text-white cursor-not-allowed"
            : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50"
        }
    `}
          >
            {isSubscribed ? (
              "Currently Active Plan"
            ) : loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 text-white mr-2" />
                Processing...
              </>
            ) : (
              "Get Started"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Feature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start">
    <svg
      className="h-5 w-5 flex-shrink-0 text-green-500 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span className="text-sm sm:text-base">{text}</span>
  </div>
);

export default SubscriptionPage;
