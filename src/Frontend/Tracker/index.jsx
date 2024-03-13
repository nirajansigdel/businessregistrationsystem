import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Ulayout } from "../userdashboard/layout";
import { getDartaByEmail } from "./api";
import { FaWpforms } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";

const ProgressTimeline = () => {
  const [progress, setProgress] = useState(null);
  const userDetail = JSON.parse(localStorage.getItem("userProfile"));
  const [email, setEmail] = useState(userDetail.email);

  useEffect(() => {
    if (email) {
      const verifyProgress = async () => {
        const dataProgress = await getDartaByEmail(email);
        setProgress(dataProgress.data[0]);
      };
      verifyProgress();
    }
  }, [email]);

  console.log({ progress });
  return (
    <Ulayout>
      {userDetail && email ? (
        <>
          {" "}
          <Card title="Progress Tracker" className="mt-16">
            {progress && (
              <div className="mx-16 my-8 items-center flex">
                <ol className="relative text-gray-500 border-s border-gray-200">
                  <li className="mb-20 ms-6">
                    <span
                      className={`absolute flex items-center justify-center w-12 h-12 ${
                        progress.isFormVerified ? "bg-green-200" : "bg-gray-100"
                      } rounded-full -start-4 ring-4 ring-white`}
                    >
                      <FaWpforms />
                    </span>
                    <div className="ml-32">
                      <h3 className="font-medium text-xl leading-tight">
                        Company Details
                      </h3>
                      <p className="text-sm font-bold">
                        {progress.isFormVerified ? (
                          <p className="text-white">Verified</p>
                        ) : (
                          <p>Not Verified</p>
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="mb-20 ms-6">
                    <span
                      className={`absolute flex items-center justify-center w-12 h-12 ${
                        progress.isDocVerified ? "bg-green-200" : "bg-gray-100"
                      } rounded-full -start-4 ring-4 ring-white`}
                    >
                      <IoDocumentTextOutline />
                    </span>
                    <div className="ml-32">
                      <h3 className="font-medium leading-tight text-xl ">
                        Document Details
                      </h3>
                      <p className="text-sm font-bold">
                        {progress.isDocVerified ? (
                          <p className="text-white text-xl">Verified</p>
                        ) : (
                          <p>Not Verified</p>
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="mb-20 ms-6">
                    <span
                      className={`absolute flex items-center justify-center w-12 h-12 ${
                        progress.isPaymentVerified
                          ? "bg-green-200"
                          : "bg-gray-100"
                      } rounded-full -start-4 ring-4 ring-white`}
                    >
                      <MdOutlinePayments />
                    </span>
                    <div className="ml-32">
                      <h3 className="font-medium leading-tight text-xl">
                        Payment Verification
                      </h3>
                      <p className="text-sm font-bold">
                        {progress.isPaymentVerified ? (
                          <p className="text-white">Verified</p>
                        ) : (
                          <p>Not Verified</p>
                        )}
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            )}
          </Card>
          <div className="border border-gray-200 p-8 bg-gray-100">
            {!progress?.is_verified}Rejection message:{" "}
            {progress?.rejection_message}
          </div>
        </>
      ) : (
        <>Darta not registered</>
      )}
    </Ulayout>
  );
};
export default ProgressTimeline;
