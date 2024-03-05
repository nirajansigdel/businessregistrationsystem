import { toast } from "react-toastify";

export const addWalletUser = async (userPayload) => {
  const response = await fetch("http://localhost:3000/api/add-wallet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userPayload),
  });
  if (response.ok) {
    toast.success("Successfully Wallet Created");
  } else {
    const responseError= await response.json()
    toast.error(responseError.message);
  }
};
