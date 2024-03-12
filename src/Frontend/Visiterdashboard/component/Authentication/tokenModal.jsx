import { useState } from "react";
import Modal from "../../../../components/Modal";
import { validateToken } from "../../../Payment/api";
import { toast } from "react-toastify";

const TokenModal = ({ isOpen = false, onClose, walletId }) => {
  const [otpValue, setOtpvalue] = useState("");
  const [error, setError] = useState("Please enter your token");

  const onVerifyToken = async (e) => {
    e.preventDefault();
    console.log({ walletId, otpValue });
    if (!error) {
      const tokenResponse = await validateToken({
        token: otpValue,
        walletId: walletId,
      });
      console.log({ tokenResponse });
      if (tokenResponse.ok) {
        onClose();
        // Display success message
        toast.success("Registered successfully!", { position: "top-center" });
        // Redirect to login page
        window.location = "/login";
      } else {
        toast.error("Invalid Token");
      }
    }
  };
  return (
    <Modal isOpen={isOpen} closeModal={onClose} title="Verify Token">
      <div>
        <form className="p-4 md:p-5" onSubmit={(e) => onVerifyToken(e)}>
          <div className="mb-4">
            <div className="columns-1 mb-4">
              <label
                for="walletId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Token
              </label>
              <input
                type="text"
                name="name"
                id="walletId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Wallet Id"
                required=""
                onChange={(e) => {
                  setOtpvalue(e.target.value);
                  setError("");
                }}
              />
              {error && (
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span class="font-medium">{error}</span>
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Verify
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default TokenModal;
