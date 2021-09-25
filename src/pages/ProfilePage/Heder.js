import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-profile">
          <div className="profile-image">
            <AccountCircleIcon />
          </div>
          <div className="name">
            <div className="profile-name">
              名前 : signupした時のnameのデータを入れる
            </div>
            <input className="account-name"></input>
          </div>
          <div className="header-bar">
            <button className="profile-bar">プロフィール</button>
            <button className="favorite-bar">お気に入り</button>
          </div>
        </div>
      </header>
    </>
  );
};
