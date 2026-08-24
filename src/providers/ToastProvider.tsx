"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={10}
      toastOptions={{
        duration: 3500,
        style: {
          // background: "#111827",
          // color: "#fff",
          // border: "1px solid #1f2937",
          // borderRadius: "14px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
          // boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
        },
      }}
    />
  );
}
