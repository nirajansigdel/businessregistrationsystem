import { toast } from "react-toastify";

export const createIntentPayment = async (payload) => {
    console.log(payload)
    const response = await fetch("http://localhost:3000/api/postPaymentIntent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const responseMessage = await response.json()
  console.log({response, responseMessage})
  if (response.ok) {
    toast.success(responseMessage);
  } else {
    toast.error(responseMessage);
  }
  return responseMessage
}