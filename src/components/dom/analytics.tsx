"use client";

import { useMemo, useState } from "react";

import { GoogleAnalytics } from "@next/third-parties/google";

const Analytics = () => {
  const [loadAnalytics, setLoadAnalytics] = useState<boolean>(false);
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  useMemo(() => {
    setTimeout(() => {
      setLoadAnalytics(true);
    }, 500);
  }, []);

  return gaId && loadAnalytics && <GoogleAnalytics gaId={gaId} />;
};
export default Analytics;
