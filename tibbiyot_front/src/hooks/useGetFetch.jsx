import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function useGetFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    setIspending(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Accept-Language": `${i18n.language}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIspending(false);
      })
      .catch((err) => {
        setError("Not found");
        setIspending(false);
      });
  }, [url, i18n.language]);
  return { data, isPending, error };
}
