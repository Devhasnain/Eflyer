import Settings from "@/components/Profile/Settings";
import SettingWraper from "@/components/Settings/SettingWraper";
import React from "react";

const Profile = () => {
  return (
    <SettingWraper title="Profile" subtitle="Profile Settings">
        <Settings/>
    </SettingWraper>
  );
};

export default Profile;
