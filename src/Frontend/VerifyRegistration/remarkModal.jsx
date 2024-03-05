import { useState } from "react";
import Modal from "../../components/Modal";
import { discardVerification } from "./api";

const RemarkModal = ({ isOpen, activeTab, onClose, payload, data }) => {
  const [remarks, setRemarks] = useState("");
  const [error, setError] = useState("Please add remarks");

  const onDiscardVerification = async (e) => {
    e.preventDefault();
    if (!error && remarks) {
      let apiPayload = {
        ...payload,
        emailId: data.Email,
        remarks: remarks,
        isFormVerified:
          activeTab === "companyDetails" ? false : payload.isFormVerified,
        isDocVerified: activeTab === "document" ? false : payload.isDocVerified,
        isPaymentVerified:
          activeTab === "payment" ? false : payload.isPaymentVerified,
      };
      const discardSuccess = await discardVerification(apiPayload);
      onClose();
    } else {
      console.log("i am here");
      setError("Please add remarks");
    }
  };

  console.log({ error });

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <form className="p-4 md:p-5" onSubmit={(e) => onDiscardVerification(e)}>
        <div className="mb-4">
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
              onChange={(e) => {
                setRemarks(e.target.value);
                setError("");
              }}
            ></textarea>
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
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default RemarkModal;
