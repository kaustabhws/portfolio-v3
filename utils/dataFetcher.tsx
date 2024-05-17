"use client";

import { useState, useEffect } from "react";

export default function DataFetcher({ dataUrl }: { dataUrl: string }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://cdn.builder.io/api/v3/content/${dataUrl}?apiKey=${process.env.NEXT_PUBLIC_BUILDER_TOKEN}`,
      { next: { revalidate: 1 } }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, [dataUrl]);

  return data;
}
