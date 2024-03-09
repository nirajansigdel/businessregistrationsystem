import { toast } from "react-toastify";

export const getDartaByEmail = async (email) => {
  const response = await fetch(
    `http://localhost:3000/api/getDartaByEmail/${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseMessage = await response.json();
  if (response.ok) {
    toast.success(responseMessage.message);
  } else {
    toast.error(responseMessage.message);
  }
  return responseMessage;
};
