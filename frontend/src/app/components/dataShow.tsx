import React from "react";
import { podsData } from "../components/data";
export default function Data() {
 return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pods Data (Raw JSON)</h1>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
        {JSON.stringify(podsData, null, 2)}
      </pre>
    </div>
 );
};
