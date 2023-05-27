import React, { useContext, useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm";
import { HandleUpdateProfile } from "@/lib/Apiscalls";
import { AuthContext } from "@/core/contextApi/authContext";
import { toast } from "react-toastify";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const { setUserData } = useContext(AuthContext);
  const handleUpdateProfile = async (
    name: string,
    email: string,
    number: number
  ) => {
    setLoading(true);
    const updateProfile = await HandleUpdateProfile(name, email, number);
    if (updateProfile.status) {
      setUserData(updateProfile.data);
      setLoading(false);
      localStorage.setItem("user_data", JSON.stringify(updateProfile.data));
      toast.success(
        `Profile was successfuly updated ${updateProfile.data.name}`
      );
    } else {
      toast.error(updateProfile.message);
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <>
      <UpdateProfileForm onSubmit={handleUpdateProfile} loading={loading} />
    </>
  );
};

export default Settings;
