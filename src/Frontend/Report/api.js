import { toast } from "react-toastify";

export const downloadCSVReport = async (isVerify) => {
  const response = await fetch(
    `http://localhost:3000/api/downloadVerifiedDarta/${isVerify}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const csvData = await response.text();
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.csv";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
  if (response.ok) {
    toast.success("Success");
  } else {
    toast.error("Failed");
  }
  return response;
};
