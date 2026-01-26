import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Outlet } from "react-router-dom";
import csvUrl from "../../assets/csv_data/publication.csv?url"; // adjust if needed

const normalizeAuthors = (authors = "") =>
  authors
    .split(";")
    .map((a) => a.trim())
    .filter(Boolean);

export default function PublicationsLayout() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCsv = async () => {
      const res = await fetch(csvUrl);
      const csvText = await res.text();

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (h) => h.replace(/^\uFEFF/, "").trim(),
        transform: (v) => (typeof v === "string" ? v.trim() : v),
        complete: ({ data }) => {
          const cleaned = data
            .filter((r) => r.id && r.title)
            .map((r) => {
              const idNum = Number(r.id);
              const yearNum = Number(r.year);

              return {
                ...r,
                id: Number.isFinite(idNum) ? idNum : r.id,
                year: Number.isFinite(yearNum) ? yearNum : r.year,
                authorsArr: normalizeAuthors(r.authors),
              };
            });

          setRows(cleaned);
          setLoading(false);
        },
      });
    };

    fetchCsv();
  }, []);

  return <Outlet context={{ rows, loading }} />;
}
