import React from "react";
import profile from profile.css
export const Main = () => {
  return (
    <>
      <main className="main">
        <div className="profile-page">
          <div className="your-job">
            職種：
            <input type="text" />
          </div>
          <div className="self-introduction">
            自己紹介：
            <input type="text" />
          </div>
        </div>
        <div className="favorite-page">
          <ul>
            <li>イベント：a</li>
            <li>イベント：b</li>
          </ul>
        </div>
      </main>
    </>
  );
};
