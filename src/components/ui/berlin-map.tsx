"use client";
import React from "react";

interface BerlinMapProps {
  standorte: {
    name: string;
    address: string;
    plz: string;
    mapsUrl: string;
    x: string; // percentage position on map
    y: string; // percentage position on map
  }[];
}

export default function BerlinMap({ standorte }: BerlinMapProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Berlin outline SVG */}
      <svg
        viewBox="0 0 200 150"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.3))" }}
      >
        {/* Berlin outline - simplified */}
        <path
          d="M 30 40 L 45 25 L 70 20 L 95 15 L 130 20 L 160 30 L 175 50 
             L 180 70 L 175 95 L 160 115 L 130 125 L 100 130 L 70 125 
             L 45 115 L 25 95 L 20 70 L 25 50 Z"
          fill="#e8e8e8"
          stroke="#1a365d"
          strokeWidth="1.5"
        />

        {/* Inner districts pattern */}
        <path
          d="M 50 50 Q 80 35, 110 45 Q 140 55, 150 80 Q 140 105, 110 110 
             Q 80 115, 55 100 Q 35 85, 50 50"
          fill="none"
          stroke="#d0d0d0"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />

        {/* Water features (Spree) */}
        <path
          d="M 60 30 Q 80 45, 90 60 Q 100 80, 85 100"
          fill="none"
          stroke="#a8d4e6"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Some district labels */}
        <text x="35" y="55" fontSize="4" fill="#999" fontFamily="sans-serif">
          Süd
        </text>
        <text x="145" y="45" fontSize="4" fill="#999" fontFamily="sans-serif">
          Nord
        </text>
        <text x="145" y="105" fontSize="4" fill="#999" fontFamily="sans-serif">
          Ost
        </text>
      </svg>

      {/* Clickable markers */}
      {standorte.map((standort, index) => (
        <a
          key={index}
          href={standort.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute group"
          style={{
            left: standort.x,
            top: standort.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          {/* Marker pin */}
          <div className="relative cursor-pointer">
            <div className="w-10 h-10 bg-[#dc2626] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#b91c1c] transition-all duration-200">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
            {/* Pointer triangle */}
            <div className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#dc2626] group-hover:border-t-[#b91c1c] transition-colors duration-200" />

            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-white rounded-lg shadow-xl p-3 min-w-[160px] text-center border border-gray-100">
                <p className="font-bold text-[#1a365d] text-sm">
                  {standort.name}
                </p>
                <p className="text-gray-600 text-xs mt-1">{standort.address}</p>
                <p className="text-gray-500 text-xs">{standort.plz}</p>
                <p className="text-[#dc2626] text-xs mt-2 font-medium">
                  → Route planen
                </p>
              </div>
              {/* Arrow */}
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white"></div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
