import { useState } from "react";
import Modal from "../../components/Modal";

const PackageModal = ({
  setPaymentModal,
  paymentPayload,
  setPaymentPayload,
}) => {
  const [packageData, setPackageData] = useState({
    name: "",
    value: "",
  });
  const [error, setError] = useState("Please choose a package to continue");

  const onConfirmPayment = async (e) => {
    e.preventDefault(e);
    if (!error) {
      setPaymentPayload({
        ...paymentPayload,
        package: packageData.value,
        amount: 2500,
      });
      setPaymentModal(true);
    }
  };
  return (
    <div className="p-8">
      <form onSubmit={(e) => onConfirmPayment(e)}>
        <div className="col-span-2 sm:col-span-1 mb-4">
          <label
            for="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Package
          </label>
          <select
            id="package"
            name="package"
            onChange={(e) => {
              setPackageData({
                name: e.target.name,
                value: e.target.value,
              });
              setError("");
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option selected="">Select Package</option>
            <option value="1" id="1">
              Monthly Rs.900
            </option>
            <option value="3" id="2">
              3 months Rs.2500
            </option>
            <option value="6" id="3">
              6 months Rs.4500
            </option>
            <option value="9" id="4">
              Yearly Rs.9000
            </option>
          </select>
          {error && (
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
              <span class="font-medium">{error}</span>
            </p>
          )}
        </div>
        {/* <button
          data-modal-hide="popup-modal"
          type="submit"
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Continue
        </button> */}
      </form>
    </div>
  );
};

export default PackageModal;
