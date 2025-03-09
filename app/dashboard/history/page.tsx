"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "@/utils/db";
import Templates from "@/app/(data)/Templates";
import { AIOutput } from "@/utils/Schema";
import { TEMPLATE } from "../_components/TemplateSection";

interface HistoryItem {
  id: number;
  templateSlug: string;
  aiResp: string;
  date: string;
  words: number;
}

export default function HistoryPage() {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 🔹 Loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const data = await db.select().from(AIOutput);
        const formattedData: HistoryItem[] = data.map((item) => ({
          id: item.id,
          templateSlug: item.templateSlug,
          aiResp: item.aiResponse || "",
          date: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "N/A",
          words: item.aiResponse ? item.aiResponse.split(" ").length : 0,
        }));
        setHistoryData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchData();
  }, []);

  const getTemplateIcon = (slug: string) => {
    const template = Templates.find((t: TEMPLATE) => t.slug === slug);
    return template?.icon || "";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold">History</h2>
      <p className="text-gray-600">Search your previously generated AI content</p>

      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        {loading ? ( // 🔹 Show loading state
          <div className="flex justify-center items-center p-6">
            <span className="text-gray-500 animate-pulse">Loading...</span>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">TEMPLATE</th>
                <th className="p-2">AI RESP</th>
                <th className="p-2">DATE</th>
                <th className="p-2">WORDS</th>
                <th className="p-2">COPY</th>
              </tr>
            </thead>
            <tbody>
              {historyData.length > 0 ? (
                historyData.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 flex items-center">
                      {getTemplateIcon(item.templateSlug) && (
                        <Image
                          src={getTemplateIcon(item.templateSlug)}
                          alt={item.templateSlug}
                          width={30}
                          height={30}
                          className="mr-2"
                        />
                      )}
                      {item.templateSlug}
                    </td>
                    <td className="p-3 truncate max-w-[200px]">{item.aiResp}</td>
                    <td className="p-3">{item.date}</td>
                    <td className="p-3">{item.words}</td>
                    <td className="p-3">
                      <button
                        onClick={() => navigator.clipboard.writeText(item.aiResp)}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        Copy
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 p-4">
                    No history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
