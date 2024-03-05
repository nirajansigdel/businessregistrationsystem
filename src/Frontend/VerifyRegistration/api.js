import { toast } from "react-toastify";



export const getPaymentById = async (data) => {
  const response = await fetch(
    `http://localhost:3000/api/get-payment/${data}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseMessage = await response.json();
  console.log({ responseMessage });
  if (response.ok) {
    toast.success(responseMessage.message);
  } else {
    toast.error(responseMessage.message);
  }
  return responseMessage;
};

export const updateVerification = async (payload) => {
  const response = await fetch(`http://localhost:3000/api/putDartaVerify`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(payload)
  });
  const responseMessage = await response.json();
  if (response.ok) {
    toast.success(responseMessage.message);
  } else {
    toast.error(responseMessage.message);
  }
  return responseMessage;
};

export const discardVerification = async (payload) => {
    const response = await fetch(`http://localhost:3000/api/putDiscardVerify`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(payload)
    });
    const responseMessage = await response.json();
    if (response.ok) {
      toast.success(responseMessage.message);
    } else {
      toast.error(responseMessage.message);
    }
    return responseMessage;
  };
  