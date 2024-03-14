import { useState } from "react";
import PackageModal from "./paymentPackage";
import UserVerifyModal from "./userVerification";
import TokenModal from "./tokenModal";
import SuccessModal from "./successModal";
import { loadStripe } from "@stripe/stripe-js";
import { createIntentPayment } from "../Stripe/api";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Stripe/CheckoutForm";

const Payment = () => {
  const [openPaymentModal, setPaymentModal] = useState(false);
  const [openConfirmModal, setConfirmModal] = useState(false);
  const [openPaymentSuccessModal, setPaymentSuccessModal] = useState(false);
  const [paymentPayload, setPaymentPayload] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [packageData, setPackageData] = useState({
    name: "",
    value: "",
  });
  const [error, setError] = useState("Please choose a package to continue");

  const stripePromise = loadStripe(
    "pk_test_51OqWfFCMM59Ao6V6nCxFkYVO64Pf0GOKs6HXkg7IrHQqNWLAUlLgW9akK2ea3graR2BTWqPCiOGd9PyU5BJe2duP00kI8kZjbH"
  );

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  const selectOptions = [
    { label: "Online Business", value: "Online Business", amount: 1500 },
    { label: "School", value: "School", amount: 2500 },
    { label: "Hotel", value: "Hotel", amount: 3000 },
    { label: "Resort ", value: "Resort", amount: 2000 },
  ];

  const onHandlePackage = async (paymentType) => {
    if (!error) {
      setPaymentPayload({
        ...paymentPayload,
        package: packageData.value,
        amount: selectOptions.find(
          (option) => option.value === packageData.value
        ),
      });
      if (paymentType === "online") setPaymentModal(true);
      else {
        const payload = selectOptions.find(
          (option) => option.value === packageData.value
        );
        console.log({ payload });
        const { clientSecret } = await createIntentPayment(payload);
        setClientSecret(clientSecret);
      }
    }
  };

  return (
    <>
      <div className="px-8">
        <form>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            >
              <option selected="">Select Package</option>
              <option value="Online Business" id="1">
                Online Business Rs.1500
              </option>
              <option value="School" id="2">
                School Rs.2500
              </option>
              <option value="Hotel" id="3">
                 Hotel Rs.3000
              </option>
              <option value="Resort" id="4">
                Resort Rs.2000
              </option>
            </select>
            {error && (
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{error}</span>
              </p>
            )}
          </div>
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={() => onHandlePackage("online")}
          >
            Online Payment
          </button> */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            onClick={() => onHandlePackage("stripe")}
          >
            Stripe Payment
          </button>
        </form>
      </div>

      {openPaymentModal && (
        <UserVerifyModal
          onClose={() => setPaymentModal(false)}
          isOpen={openPaymentModal}
          setConfirmModal={setConfirmModal}
          paymentPayload={paymentPayload}
          setPaymentPayload={setPaymentPayload}
        />
      )}
      {openConfirmModal && (
        <TokenModal
          onClose={() => setConfirmModal(false)}
          isOpen={openConfirmModal}
          setPaymentSuccessModal={setPaymentSuccessModal}
          paymentPayload={paymentPayload}
          setPaymentPayload={setPaymentPayload}
        />
      )}
      {openPaymentSuccessModal && (
        <SuccessModal
          onClose={() => setPaymentSuccessModal(false)}
          isOpen={openPaymentSuccessModal}
          paymentPayload={paymentPayload}
          setPaymentPayload={setPaymentPayload}
        />
      )}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} key={clientSecret}>
          <CheckoutForm clientSecret={clientSecret} packageData={packageData} />
        </Elements>
      )}
    </>
  );
};
export default Payment;
