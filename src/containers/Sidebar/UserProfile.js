import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Popover } from "antd";
import { userSignOut } from "appRedux/actions/Auth";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState("Jones, Miller");
  const changeuser = (e) => {
    console.log(e);
    setstate(e);
  };
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li onClick={() => changeuser("Adam, Billi")}>Adam, Billi</li>
      <li onClick={() => changeuser("Gower, pamela")}>Gower, pamela</li>
      <li onClick={() => changeuser("Jones, Miller")}>Jones, Miller</li>
    </ul>
  );

  return (
    <div className="gx-flex-row gx-align-items-center gx-avatar-row">
      <Popover
        placement="bottomRight"
        content={userMenuOptions}
        trigger="click"
      >
        <Avatar
          src={"https://via.placeholder.com/150"}
          className="gx-size-40 gx-pointer gx-mr-3"
          alt=""
        />
        <span className="gx-avatar-name">
          {state}
          <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
        </span>
      </Popover>
    </div>
  );
};

export default UserProfile;
