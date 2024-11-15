"use client";

import { title } from "@/components/primitives";
import { useState } from "react";

export default function Predict() {
  const [date, setDate] = useState<string>("31-07-2023");
  const [model, setModel] = useState<string>("");
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const minDate = "31-07-2023";
  const maxDate = "28-09-2023";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !model) {
      alert("Please select both: a date and a model.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/predict", {
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

      console.log("Sending request:", { date, model });
      const data = await response.json();
      console.log("Received response:", data.prediction);
      setResult(data.prediction);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className={title()}>AQI Prediction</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="w-full max-w-md mb-5">
          <label htmlFor="date" className="block font-medium text-gray-700">
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
            className="mt-6 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="w-full max-w-md mb-4">
          <label htmlFor="model" className="block font-medium text-gray-700">
            Select Model:
          </label>
          <select
            id="model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Model
            </option>
            <option value="xgboost">XgBoost</option>
            <option value="lstm">LSTM</option>
            <option value="gru">GRU</option>
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

      {result && (
        <div>
          <h3>Prediction Result:</h3>
          <p>Date: {result.Date}</p>
          <p>CO: {result.CO}</p>
          <p>Predicted NO2: {result.NO2}</p>
          <p>Predicted Ozone: {result.Ozone}</p>
          <p>Predicted PM2.5: {result['PM2.5']}</p>
          <p>Predicted PM10: {Number(result.PM10).toFixed(2)}</p>
          <p>Predicted SO2: {result.SO2}</p>
        </div>
      )}
    </div>
  );
}
