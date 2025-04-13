"use client";

import React from "react";

const BetaBanner = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg flex items-center">
      <span className="bg-white text-blue-600 text-xs font-bold py-1 px-2 rounded-full mr-2">
        β
      </span>
      <span className="font-medium">
        ベータ版のため一部機能が制限されています
      </span>
    </div>
  );
};

export default BetaBanner;
