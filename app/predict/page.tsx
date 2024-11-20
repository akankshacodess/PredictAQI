"use client";

import React, { useState } from "react";

import Alert from "@/components/alert";
import AQIComponent from "@/components/AqiComponent";
// import DoughnutChart from "@/components/chartjs";
// import { config } from "@/components/chartjs";
import { title } from "@/components/primitives";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Predict() {
  const [date, setDate] = useState<string>("31-07-2023");
  const [model, setModel] = useState<string>("");
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  // const [parameters, setParameters] = useState<number[]>([]);

  const minDate = "31-07-2023";
  const maxDate = "28-09-2023";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !model) {
      setIsAlertOpen(true);

      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://predictingaqi.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, model }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      // console.log("Sending request:", { date, model });
      const data = await response.json();
      // console.log("Received response:", data.prediction);
      setResult(data.prediction);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: ["CO", "NO2", "Ozone", "PM2.5", "PM10", "SO2"],
    datasets: [
      {
        data: [
          result ? Number(result.CO).toFixed(2) : 0,
          result ? Number(result.NO2).toFixed(2) : 0,
          result ? Number(result.Ozone).toFixed(2) : 0,
          result ? Number(result?.["PM2.5"]).toFixed(2) : 0,
          result ? Number(result.PM10).toFixed(2) : 0,
          result ? Number(result.SO2).toFixed(2) : 0,
        ],
        backgroundColor: [
          "#EC3B83", // CO
          "#A9D483", // NO2
          "#FFD8B6", // Ozone
          "#B48EFD", // PM2.5
          "#7F67F9", // PM10
          "#1B49C9", // SO2
        ],
        borderWidth: 0,
        hoverOffset: 4,
        borderRadius: 5,
        spacing: 3,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const label = tooltipItem.label;
            const value = tooltipItem.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <>
      <div>
        <h2 className={title()}>AQI Prediction</h2>
        <div className="p-6 grid grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="w-full max-w-md ">
            <div className=" mb-5">
              <label
                htmlFor="date"
                className="mt-10 block font-medium text-gray-500"
              >
                Select Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date.split("-").reverse().join("-")}
                min={minDate.split("-").reverse().join("-")}
                max={maxDate.split("-").reverse().join("-")}
                onChange={(e) =>
                  setDate(e.target.value.split("-").reverse().join("-"))
                }
                className="mt-5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className=" mb-4">
              <label
                htmlFor="model"
                className=" mt-10 block font-medium text-gray-500"
              >
                Select Model:
              </label>
              <select
                id="model"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="mt-5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Model
                </option>
                <option value="xgboost"> XgBoost </option>
                <option value="lstm"> LSTM </option>
                <option value="gru"> GRU </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={loading}
            >
              {loading ? "Loading.." : "Get Prediction"}
            </button>
          </form>

          <div className="p-4 flex flex-col items-center">
            <div className="mb-4 w-full"></div>

            <div className="w-full max-w-sm">
              {result ? (
                <>
                  <div style={{ width: "325px", height: "325px" }}>
                    <Doughnut
                      data={chartData}
                      options={chartOptions}
                    ></Doughnut>
                    <div className="pt-5">
                      <AQIComponent result={result} />
                    </div>
                  </div>

                  {/* <h3>Prediction Result:</h3>
                <p>Date: {result.Date.split("T")[0]}</p>
                <p>CO: {result.CO}</p>
                <p>Predicted NO2: {result.NO2}</p>
                <p>Predicted Ozone: {result.Ozone}</p>
                <p>Predicted PM2.5: {result["PM2.5"]}</p>
                <p>Predicted PM10: {Number(result.PM10).toFixed(2)}</p>
                <p>Predicted SO2: {result.SO2}</p> */}
                </>
              ) : (
                <p className="flex flex-col items-center justify-center text-center text-gray-500">
                  Submit the form to see the AQI prediction.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Alert
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        title="Missing Information"
        description="Please select both a date and a model to proceed."
      />
    </>
  );
}
