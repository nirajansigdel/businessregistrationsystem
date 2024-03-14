import React, { useEffect, useState } from "react";
import { getDartaByEmail } from "./api";
import { Ulayout } from "../userdashboard/layout";

export const Profile = () => {
  const dartaDetail = JSON.parse(localStorage.getItem("userProfile"));
  const [email, setEmail] = useState(dartaDetail.email);
  const [dartaProfile, setDartaProfile] = useState(null);
  useEffect(() => {
    if (email) {
      const getProfile = async () => {
        const profileData = await getDartaByEmail(email);
        if (profileData?.data?.length > 0) setDartaProfile(profileData.data[0]);
      };
      getProfile();
    }
  }, [email]);

  return (
    <Ulayout>
      <div className="p-8 flex items-center justify-center">
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg w-full">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Darta Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about darta.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dartaProfile?.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Type</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dartaProfile?.type}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dartaProfile?.Email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dartaProfile?.Phone}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Joined Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dartaProfile?.date}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Ulayout>
  );
};

export default Profile;
