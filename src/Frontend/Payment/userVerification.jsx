import { useState } from "react";
import Modal from "../../components/Modal";
import { verifyWalletUser } from "./api";
import { toast } from "react-toastify";

const UserVerifyModal = ({
  setConfirmModal,
  onClose,
  isOpen,
  paymentPayload,
  setPaymentPayload,
}) => {
  const [paymentDetails, setPaymentDetails] = useState({
    walletId: "",
    password: "",
    remarks: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
    setPaymentPayload({ ...paymentPayload, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const verifyPayment = async (e) => {
    e.preventDefault();
    console.log({ errors });
    const validateErrors = validateForm(paymentDetails);
    if (Object.keys(validateErrors).length === 0) {
      const userResponse = await verifyWalletUser(paymentDetails);
      const {message}= await userResponse.json()
      if (userResponse.ok) {
        setConfirmModal(true);
        onClose();
        toast.success(message);
      } else {
        toast.error(message);
      }
    } else {
      setErrors(validateErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.walletId) {
      console.log("i am inside");
      errors.walletId = "WalletId cannot be empty";
    }

    if (!data.password) {
      errors.password = "Password cannot be empty";
    }
    if (!data.remarks) {
      errors.remarks = "Remarks cannot be empty";
    }

    return errors;
  };
  return (
    <Modal isOpen={isOpen} closeModal={onClose} title="User Login">
      <div>
        <form className="p-4 md:p-5" onSubmit={(e) => verifyPayment(e)}>
          <div className="mb-4">
            <div className="columns-1 mb-4">
              <label
                for="walletId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                E-Walllet Id:
              </label>
              <input
                type="text"
                name="walletId"
                id="walletId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Wallet Id"
                required=""
                onChange={(e) => handleInputChange(e)}
              />
              {errors && errors.walletId && (
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span class="font-medium">{errors.walletId}</span>
                </p>
              )}
            </div>
            <div className="col sm:col-span-1 mb-4">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Password"
                required=""
                onChange={(e) => handleInputChange(e)}
              />
              {errors && errors.password && (
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span class="font-medium">{errors.password}</span>
                </p>
              )}
            </div>

            <div className="col-span-2">
              <label
                for="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Remarks
              </label>
              <textarea
                id="description"
                rows="4"
                name="remarks"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write product description here"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
              {errors && errors.remarks && (
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span class="font-medium">{errors.remarks}</span>
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Continue
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UserVerifyModal;
