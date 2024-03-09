import { toast } from "react-toastify";

export const postPaymentData = async (paymentPayload) => {
  const response = await fetch("http://localhost:3000/api/add-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentPayload),
  });
  if (response.ok) {
    toast.success("Successfully Paid");
  } else {
    toast.error("Failed While Processing");
  }
  return response;
};

export const verifyWalletUser = async (userData) => {
  const response = await fetch("http://localhost:3000/api/isWalletExist", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  // if (response.ok) {
  //   toast.success("Successfully Paid");
  // } else {
  //   toast.error("Failed While Processing");
  // }
  return response;
};

export const validateToken = async (token) => {
  const response = await fetch("http://localhost:3000/api/validateToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  });
  // const responseMessage = await response.json();
  // if (response.ok) {
  //   toast.success(responseMessage);
  // } else {
  //   toast.error(responseMessage);
  // }
  return response;
};
