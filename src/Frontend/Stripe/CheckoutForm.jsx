import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Modal from "../../components/Modal";
import { postPaymentData } from "../Payment/api";

const CheckoutForm = ({ clientSecret, packageData }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [walletId, setWalletId] = useState("");
  const [error, setError] = useState("WalletId cannot be empty");
  const dartaDetail = JSON.parse(localStorage.getItem("dartaDetails"));

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const isPayment = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3001/",
      },
      redirect: "if_required",
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (isPayment?.paymentIntent?.status === "succeeded") {
      const payload = {
        walletId: walletId,
        package: packageData.value,
        amount: isPayment.paymentIntent.amount,
        dartaId: dartaDetail.id,
      };
      const addPayment = await postPaymentData(payload);
    }
    if (
      isPayment?.error?.type === "card_error" ||
      isPayment?.error?.type === "validation_error"
    ) {
    }
    console.log(isPayment);

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  const handleInputChange = (e) => {
    setError("");
    setWalletId(e.target.value);
  };
  return (
    <Modal
      isOpen={isOpen}
      title="Stripe Payment"
      closeModal={() => setIsOpen(false)}
    >
      <div className="p-4">
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <div className="columns-1 my-4">
            <label
              for="walletId"
              className="block mb-2 text-md text-gray-900 dark:text-white"
            >
              E-Walllet Id:
            </label>
            <input
              type="text"
              name="walletId"
              id="walletId"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Wallet Id"
              required=""
              onChange={(e) => handleInputChange(e)}
            />
            {error && (
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{error}</span>
              </p>
            )}
          </div>
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2"
                >
                  Pay Now
                </button>
              )}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </Modal>
  );
};

export default CheckoutForm;
