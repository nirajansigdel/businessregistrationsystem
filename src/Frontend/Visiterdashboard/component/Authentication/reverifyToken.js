import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../../../components/Modal";
import axios from "axios";
import TokenModal from "./tokenModal";

const TokenReverify = ({ onClose, isOpen }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("please enter an email id");
  const [tokenModalOpen, setTokenModalOpen] = useState(false);

  const verifyPayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/reVerifyUserToken/${email}`
      );
      toast.success("Token sent Successfully!");
      onClose();
      setTokenModalOpen(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} closeModal={onClose} title="Verify User">
        <div>
          <form className="p-4 md:p-5" onSubmit={(e) => verifyPayment(e)}>
            <div className="mb-4">
              <div className="columns-1 mb-4">
                <label
                  for="walletId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email:
                </label>
                <input
                  type="text"
                  name="walletId"
                  id="walletId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Wallet Id"
                  required=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors("");
                  }}
                />
                {errors && (
                  <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span class="font-medium">{errors.walletId}</span>
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
      <TokenModal
        isOpen={tokenModalOpen}
        onClose={() => setTokenModalOpen(!tokenModalOpen)}
        walletId={email}
      />
    </>
  );
};

export default TokenReverify;
