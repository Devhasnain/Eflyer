import React, { useContext, useState } from "react";
import UpdateAccountSettings from "./UpdateAccountSettings";
import { HandleChangePassword } from "@/lib/Apiscalls";
import { toast } from "react-toastify";
import { AuthContext } from "@/core/contextApi/authContext";

const Settings = () => {
  const {userData}= useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleChangePassword = async (
    password: string,
    currentpassword: string
  ) => {
    setLoading(true);
    const updateProfile = await HandleChangePassword(password, currentpassword);
    if (updateProfile.status) {
      setLoading(false);
      toast.success(
        `Password was successfuly updated ${userData?.name}`
      );
    } else {
      toast.error(updateProfile.message);
      setLoading(false);
    }
    setLoading(false);
  };
  return <UpdateAccountSettings onSubmit={handleChangePassword} loading={loading} />;
};

export default Settings;
