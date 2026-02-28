// server/api/prices.get.ts
import Papa from "papaparse";

interface PriceItem {
  id: number;
  category: string;
  title: string;
  price: string;
}

export default defineEventHandler(async (event) => {
  const csvUrl = process.env.NUXT_GOOGLE_SHEET_CSV_URL;

  if (!csvUrl) {
    throw createError({ statusCode: 500, message: "Missing CSV URL" });
  }

  try {
    const response = await $fetch<string>(csvUrl);
    const cleanCsv = response.replace(/^\uFEFF/, "");

    // Papaparse более надёжен в Node/Nuxt окружении
    const result = Papa.parse(cleanCsv, {
      header: true,
      skipEmptyLines: true,
      trim: true,
      transformHeader: (h) => h.toLowerCase().trim(), // нормализуем заголовки
    });

    if (result.errors.length > 0) {
      console.warn("⚠️ CSV Warnings:", result.errors);
    }

    const prices = result.data
      .map((row: any, index: number) => ({
        id: index + 1,
        category: String(row.category || "").trim(),
        title: String(row.title || "").trim(),
        price: String(row.price || "").trim(),
      }))
      .filter((item: PriceItem) => item.category && item.title);

    setResponseHeader(
      event,
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=3600"
    );

    return prices;
  } catch (error: any) {
    console.error("CSV Error:", error);
    throw createError({
      statusCode: 500,
      message:
        process.env.NODE_ENV === "production"
          ? "Failed to parse prices"
          : `CSV Error: ${error?.message || "Unknown error"}`,
    });
  }
});
