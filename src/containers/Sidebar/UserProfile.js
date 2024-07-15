import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Popover } from "antd";
import { userSignOut } from "appRedux/actions/Auth";
import { Userval } from "../../appRedux/actions/Contact";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState("Jones, Miller");
  const [initial, setInitial] = useState("JM");

  const changeuser = (e) => {
    setstate(e);
    if (e === "Adam, Billi") {
      setInitial("AB");
      dispatch(Userval("AB"));
    } else if (e === "Gower, Pamela") {
      setInitial("GP");
      dispatch(Userval("GP"));
    } else if (e === "Jones, Miller") {
      setInitial("JM");
      dispatch(Userval("JM"));
    }
  };

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li onClick={() => changeuser("Adam, Billi")}>Adam, Billi</li>
      <li onClick={() => changeuser("Gower, Pamela")}>Gower, Pamela</li>
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
          style={{
            color: "black",
          }}
          className="gx-size-40 gx-pointer gx-mr-3"
        >
          {initial}
        </Avatar>
        <span className="gx-avatar-name">
          {state}
          <i className="icon icon-chevron-down gx-fs-xxs gx-ml-2" />
        </span>
      </Popover>
    </div>
  );
};

export default UserProfile;
