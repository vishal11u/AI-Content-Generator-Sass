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
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await db.select().from(AIOutput);
        const formattedData: HistoryItem[] = data.map((item) => ({
          id: item.id,
          templateSlug: item.templateSlug,
          aiResp: item.aiResponse || "",
          date: item.createdAt
            ? new Date(item.createdAt).toLocaleDateString()
            : "N/A",
          words: item.aiResponse ? item.aiResponse.split(" ").length : 0,
        }));
        setHistoryData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getTemplateIcon = (slug: string) => {
    const template = Templates.find((t: TEMPLATE) => t.slug === slug);
    return template?.icon || "";
  };

  // Pagination logic
  const totalPages = Math.ceil(historyData.length / itemsPerPage);
  const paginatedData = historyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800">History</h2>
      <p className="text-gray-600">
        Search your previously generated AI content
      </p>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        {loading ? (
          <div className="flex justify-center items-center p-6">
            <span className="text-gray-500 animate-pulse">Loading...</span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-gray-200 text-sm md:text-base">
                  <th className="p-3">TEMPLATE</th>
                  <th className="p-3">AI RESP</th>
                  <th className="p-3">DATE</th>
                  <th className="p-3">WORDS</th>
                  <th className="p-3">COPY</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 flex items-center">
                        {getTemplateIcon(item.templateSlug) && (
                          <Image
                            src={getTemplateIcon(item.templateSlug)}
                            alt={item.templateSlug}
                            width={24}
                            height={24}
                            className="mr-2"
                          />
                        )}
                        <span className="truncate text-sm md:text-base">
                          {item.templateSlug}
                        </span>
                      </td>
                      <td className="p-3 truncate max-w-[150px] md:max-w-[250px] text-sm md:text-base">
                        {item.aiResp}
                      </td>
                      <td className="p-3 text-sm md:text-base">{item.date}</td>
                      <td className="p-3 text-sm md:text-base">{item.words}</td>
                      <td className="p-3">
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(item.aiResp)
                          }
                          className="text-blue-600 hover:underline text-sm md:text-base"
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
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-4 flex justify-center items-center space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === 1
                  ? "text-gray-400"
                  : "text-blue-600 hover:bg-gray-200"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-700 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === totalPages
                  ? "text-gray-400"
                  : "text-blue-600 hover:bg-gray-200"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
