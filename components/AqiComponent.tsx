"use client";

import React from "react";

export const calculateAQI = (parameters: {
  CO: number;
  NO2: number;
  Ozone: number;
  PM25: number;
  PM10: number;
  SO2: number;
}): string => {
  const { CO, NO2, Ozone, PM25, PM10, SO2 } = parameters;

  const aqi =
    CO * 1 + // Weight for CO
    NO2 * 1 + // Weight for NO2
    Ozone * 1 + // Weight for Ozone
    PM25 * 0.5 + // Weight for PM2.5
    PM10 * 0.3 + // Weight for PM10
    SO2 * 1; // Weight for SO2

  return (aqi * 1.5).toFixed(2); // Round AQI to two decimal places
};

export default function AQIComponent({ result }: { result: any }) {
  console.log("Result data:", result);
  if (!result) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-xl">No data available.</p>
      </div>
    );
  }

  // Extract parameters and calculate AQI
  const parameters = {
    CO: Number(result.CO),
    NO2: Number(result.NO2),
    Ozone: Number(result.Ozone),
    PM25: Number(result["PM2.5"]),
    PM10: Number(result.PM10),
    SO2: Number(result.SO2),
  };
  const aqi = calculateAQI(parameters);
  // console.log(aqi);

  return (
    <div className="flex justify-center items-center h-full">
      <p className="text-2xl font-bold text-gray-500">
        AQI:
        <span className="text-blue-600 ml-2" style={{ fontSize: "24px" }}>
          {aqi}
        </span>
      </p>
    </div>
  );
}
