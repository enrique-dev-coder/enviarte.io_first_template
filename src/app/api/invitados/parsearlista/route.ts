//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import csv from "csv-parser";
import streamifier from "streamifier";
import * as XLSX from "xlsx/xlsx.mjs";

// Función para parsear archivos CSV
// TODO: validacion de estructura del archivo , debe ser solo 1 hoja que tenga columnas nombre | tel | pasesAsignados
async function parseCSVFile(fileBuffer) {
  return new Promise((resolve, reject) => {
    const data = [];
    streamifier
      .createReadStream(fileBuffer)
      .pipe(csv())
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");
  if (file.size == 0) {
    return NextResponse.json(
      {
        message: "Por Favor sube un archivo valido",
      },
      { status: 500 }
    );
  }
  // validar que sea un archivo xlsx,csv o xls
  if (file.name.endsWith(".csv")) {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    // Parsear el archivo CSV con la data traida desde una promesa
    const parsedData = await parseCSVFile(fileBuffer);
    return NextResponse.json(
      {
        message: "data parseada uwu",
        data: parsedData,
      },
      { status: 200 }
    );
  } else if (file.name.endsWith(".xls") || file.name.endsWith(".xlsx")) {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0]; // Suponemos que solo hay una hoja
    const worksheet = workbook.Sheets[sheetName];
    let parsedData = [];
    parsedData = XLSX.utils.sheet_to_json(worksheet);

    return NextResponse.json(
      {
        message: "data parseada desde xlsx",
        data: parsedData,
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    {
      message: "Sólo puedes subir archivos de tipo .xlsx,.xls,.csv",
    },
    { status: 500 }
  );
}
