import React from "react";
import { useState } from "react";
import { Ulayout } from "../userdashboard/layout";
import { addWalletUser } from "./api";
import Modal from "../../components/Modal";
import Payment from "../Payment";

const AddWalletUser = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    walletId: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const userDetail = JSON.parse(localStorage.getItem("userProfile"));
  const [email, setEmail] = useState(userDetail.email);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const createWalletUser = (e) => {
    e.preventDefault();
    const validateErrors = validateForm(userDetails);
    if (Object.keys(validateErrors).length === 0) {
      addWalletUser(userDetails);
      setModalOpen(false);
    } else {
      setErrors(validateErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.walletId) {
      errors.walletId = "WalletId cannot be empty";
    }
    if (!data.password) {
      errors.password = "Password cannot be empty";
    }

    return errors;
  };

  return (
    <Ulayout>
      <div className="p-4">
        {email ? (
          <>
            {" "}
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-5 py-2.5 me-2 mb-2 focus:outline-none float-right"
                onClick={() => setModalOpen(!modalOpen)}
              >
                Create Wallet
              </button>
            </div>
            <Payment />
            <Modal
              isOpen={modalOpen}
              title="Create Wallet"
              closeModal={() => setModalOpen(false)}
            >
              <form
                className="p-4 md:p-5"
                onSubmit={(e) => createWalletUser(e)}
              >
                <div className="mb-4">
                  <div className="columns-1 mb-4">
                    <label
                      for="walletId"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      E-Walllet Id:
                      <br />
                      <span className="font-light">
                        *please user your darta email for wallet{" "}
                      </span>
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Continue
                </button>
              </form>
            </Modal>
          </>
        ) : (
          <>You have not any resgisterd darta</>
        )}
      </div>
    </Ulayout>
  );
};

export default AddWalletUser;
