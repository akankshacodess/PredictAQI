import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";
import * as xlsx from "xlsx";

// Function to format the date from string to Date object
function formatDateV2(date: string): string {
  const [day, month, year] = date.split("-");

  return new Date(`${year}-${month}-${day}`).toISOString();
}

function formatDate(excelDate: number): Date {
  const excelStartDate = new Date(1900, 0, 1); // January 1, 1900
  const jsDate = new Date(
    excelStartDate.getTime() + (excelDate - 1) * 24 * 60 * 60 * 1000
  );
  const excelFractionalPart = excelDate % 1; // Get the time portion (fractional part)

  // Add the time portion (fractional part) to the date
  jsDate.setHours(0, 0, 0, 0); // Reset to midnight
  jsDate.setMilliseconds(
    jsDate.getMilliseconds() + excelFractionalPart * 24 * 60 * 60 * 1000
  );

  return jsDate;
}

export async function POST(req: Request, res: Response) {
  try {
    // Parsing incoming JSON data
    const { date, model } = await req.json();

    console.log("Received request:", { date, model });

    // Validate model input
    if (!model) {
      console.error("Model is required");

      return NextResponse.json({ error: "Model is required" }, { status: 400 });
    }

    // Validate date input
    if (!date) {
      console.error("Date is required");
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

    // Determine the correct file name based on the model
    let fileName = `${model}_predictions.xlsx`;
    switch (model) {
      case "gru":
        fileName = "gru_predictions.xlsx";
        break;
      case "lstm":
        fileName = "lstm_predictions.xlsx";
        break;
      case "xgboost":
        fileName = "xgboost_predictions.xlsx";
        break;
      default:
        console.error("Invalid model selected:", model);
        return NextResponse.json({ error: "Invalid model" }, { status: 400 });
    }

    console.log(fileName);
    // Construct file path
    const filePath = path.resolve("data", fileName);
    console.log("Looking for file:", filePath);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath);
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Read the Excel file
    let buffer = fs.readFileSync(filePath);
    const workbook = xlsx.read(buffer, {
      type: "buffer",
      cellDates: true,
      dateNF: "yyyy/mm/dd",
    });

    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    // console.log("Parsed Excel data:", sheetData);

    // Format the data: Convert Date column to Date objects

    // const requestedDate = `${requestedDate_[1]}-${requestedDate_[0]}-${requestedDate_[2]}`;

    const formattedData = sheetData.find((row: any) => {
      return (
        row.Date.toISOString().split("T")[0] ===
        formatDateV2(date).split("T")[0]
      );
    });

    console.log("prediction:", formattedData);

    return NextResponse.json({ prediction: formattedData });
    /*
		// Format the requested date
		const requestedDate_ = formatDate(date).toLocaleDateString().split("/");
		const requestedDate = `${requestedDate_[1]}-${requestedDate_[0]}-${requestedDate_[2]}`;

    // 2024-10-2024
    // 3-10-3000

		// Find the min and max dates in the formatted data
		const minDate = 
    // new Date(
    Math.min(...formattedData.map((row: any) => row.Date))
      // );
		const maxDate =
    //  new Date(
			Math.max(...formattedData.map((row: any) => row.Date))
		// );

		console.log("Date range:", { minDate, maxDate });

		// Validate if the requested date is within the valid range
		// if (requestedDate > maxDate || requestedDate < minDate) {
		// 	console.error("Requested date is out of range:", requestedDate);
		// 	return NextResponse.json({ error: "Date out of range" }, { status: 400 });
		// }

		// Find the prediction for the requested date
		const prediction = formattedData.find(
			(row: any) => row.Date === requestedDate
		);

		// If prediction is not found, return an error
		if (!prediction) {
			console.error(
				"No prediction found for the requested date:",
				requestedDate
			);
			return NextResponse.json(
				{ error: "No prediction found" },
				{ status: 404 }
			);
		}

		// Return the prediction
    */
    return NextResponse.json({ prediction: true });
  } catch (error: any) {
    console.error("Error in API:", error.message);
    console.error("Full error details:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
