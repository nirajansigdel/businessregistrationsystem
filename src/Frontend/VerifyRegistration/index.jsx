import { useEffect, useState } from "react";
import RemarkModal from "./remarkModal";
import { getPaymentById, updateVerification } from "./api";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoCheckmarkDone, IoDocumentOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";

const VerifyRegistration = ({ item }) => {
  const [activeTab, setActiveTab] = useState("companyDetails");
  const [openModal, setOpenModal] = useState(false);
  const [paymentDetail, setPaymentDetail] = useState(null);
  const [verifyPayload, setVerifyPayload] = useState({
    isFormVerified: item.isFormVerified,
    isDocVerified: item.isDocVerified,
    isPaymentVerified: item.isPaymentVerified,
  });

  useEffect(() => {
    if (item) {
      const fetchPayment = async () => {
        const payment = await getPaymentById(item.Email);
        setPaymentDetail(payment[0]);
      };
      fetchPayment();
    }
  }, [item]);

  const onClickVerify = (tab) => {
    setVerifyPayload((prevState) => ({
      ...prevState,
      isFormVerified: prevState.isFormVerified || tab === "companyDetails",
      isDocVerified: prevState.isDocVerified || tab === "document",
      isPaymentVerified: prevState.isPaymentVerified || tab === "payment",
    }));
  };

  const onDiscardVerify = (tab) => {
    setVerifyPayload((prevState) => ({
      ...prevState,
      isFormVerified: tab === "companyDetails" && false,
      isDocVerified: tab === "document" && false,
      isPaymentVerified: tab === "payment" && false,
    }));
  };

  const onSubmitVerify = async () => {
    const payload = {
      ...verifyPayload,
      emailId: item.Email,
    };
    const isSuccessVerify = await updateVerification(payload);
    console.log([isSuccessVerify]);
  };
  const activeTabData = () => {
    if (activeTab === "companyDetails") {
      return (
        <div className="w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Profile Tab
          </h3>
          <div className="gap-10">
            <p className="font-bold">Name</p>
            <p className="rounded border p-2 my-2">{item?.name}</p>
            <p className="font-bold">Company Type</p>
            <p className="rounded border p-2  my-2 "> {item?.type}</p>
            <p className="font-bold">Address</p>
            <p className="rounded border p-2  my-2 ">{item?.address}</p>
            <p className="font-bold">Phone</p>
            <p className="rounded border p-2 my-2 "> {item?.Phone}</p>
            <p className="font-bold">Email</p>
            <p className="rounded border p-2 my-2 ">{item?.Email}</p>
            <p className="font-bold">Joined Date</p>
            <p className="rounded border p-2 my-2 ">{item?.date}</p>
          </div>
          <div>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => {
                onDiscardVerify();
                setOpenModal(true);
              }}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Discard
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() =>  {
                onDiscardVerify();
                setOpenModal(true);
              }}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {verifyPayload.isFormVerified ? "Verified" : "Verify"}
            </button>
          </div>
        </div>
      );
    }
    if (activeTab === "document") {
      return (
        <>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Document
          </h3>

          <img
            src={item?.document}
            alt="Description"
            className=" aspect-square object-contain w-full"
          />
          <div>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() =>  {
                onDiscardVerify();
                setOpenModal(true);
              }}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Discard
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => onClickVerify(activeTab)}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {verifyPayload.isDocVerified ? "Verified" : "Verify"}
            </button>
          </div>
        </>
      );
    }
    if (activeTab === "payment") {
      return (
        <>
          {paymentDetail ? (
            <div className="gap-10">
              <p className="font-bold">Package </p>
              <p className="rounded border p-2 my-2">
                {paymentDetail?.Package} months
              </p>
              <p className="font-bold">Cost</p>
              <p className="rounded border p-2  my-2 ">
                {" "}
                {paymentDetail.Amount}
              </p>
            </div>
          ) : (
            "No payment Found"
          )}
          <div>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => setOpenModal(true)}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Discard
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              onClick={() => onClickVerify(activeTab)}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {verifyPayload.isPaymentVerified ? "Verified" : "Verify"}
            </button>
          </div>
        </>
      );
    }
    if (activeTab === "confirm") {
      return (
        <div>
          <p className="p-2">
            Form Verification: {`${verifyPayload.isFormVerified}`}
          </p>
          <p className="p-2">
            Document Verification: {`${verifyPayload.isDocVerified}`}
          </p>
          <p className="p-2">
            Payment Verification: {`${verifyPayload.isPaymentVerified}`}
          </p>
        </div>
      );
    }
  };
  return (
    <div className="md:flex p-8">
      <ul
        className={`flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0`}
      >
        <li>
          <button
            type="button"
            className={`inline-flex items-center px-4 py-3 ${
              activeTab === "companyDetails"
                ? " text-white bg-blue-700"
                : "bg-gray-50"
            } rounded-lg active w-full`}
            onClick={() => setActiveTab("companyDetails")}
          >
            <HiOutlineBuildingOffice2 />
            Company Details
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("document")}
            className={`inline-flex items-center px-4 py-3 ${
              activeTab === "document"
                ? " text-white bg-blue-700"
                : "bg-gray-50"
            } rounded-lg active w-full`}
          >
            <IoDocumentOutline />
            Document Verifcation
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`inline-flex items-center px-4 py-3 ${
              activeTab === "payment" ? " text-white bg-blue-700" : "bg-gray-50"
            } rounded-lg active w-full`}
            onClick={() => setActiveTab("payment")}
          >
            <MdOutlinePayments />
            Payment Verification
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`inline-flex items-center px-4 py-3 ${
              activeTab === "confirm" ? " text-white bg-blue-700" : "bg-gray-50"
            } rounded-lg active w-full`}
            onClick={() => setActiveTab("confirm")}
          >
            <IoCheckmarkDone />
            Confirmation
          </button>
        </li>
      </ul>
      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-[48rem]">
        {activeTabData()}
        {activeTab !== "confirm" ? (
          <> </>
        ) : (
          <button
            data-modal-hide="popup-modal"
            type="button"
            onClick={() => onSubmitVerify()}
            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Submit
          </button>
        )}
      </div>
      <RemarkModal
        isOpen={openModal}
        activeTab={activeTab}
        onClose={() => setOpenModal(false)}
        data={item}
        payload={verifyPayload}
      />
    </div>
  );
};

export default VerifyRegistration;
