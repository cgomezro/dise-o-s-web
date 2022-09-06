import React from "react";
import { Avatar } from "@mui/material";

const AvatarComponent = ({ user, size }) => {
  if (user) {
    return (
      <Avatar
        style={{
          width: size ? size : 50,
          height: size ? size : 50,
          fontSize: size ? size * 0.7 : 50 * 0.7,
        }}
        src={user.profile ? user.profile?.avatar : ""}
      >
        {user.username?.charAt(0).toUpperCase()}
      </Avatar>
    );
  }
  return null;
};

export default AvatarComponent;
