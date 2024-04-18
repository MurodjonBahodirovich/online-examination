import React, { useState } from "react";
import Modal from "../Modal/Modal";
import {
  UserIcon,
  UserImage,
  UserImgInput,
  UserImgLabel,
  UserInfo,
  UserInfoElement,
} from "./Profile.styles";

function Profile({ closeModal }) {
  const [userImage, setUserImage] = useState(null);

  const userInfoNames = [
    {
      id: 1,
      userInfoName: "Ism",
      userInfo: "Murodjon",
    },
    {
      id: 2,
      userInfoName: "Familiya",
      userInfo: "Halilov",
    },
    {
      id: 3,
      userInfoName: "Sinf",
      userInfo: "11-B",
    },
  ];

  return (
    <>
      <Modal closeModal={closeModal}>
        <UserImgLabel htmlFor="userimg">
          {userImage ? (
            <UserImage src={URL.createObjectURL(userImage)} alt="userimage" />
          ) : (
            <UserIcon className="fa fa-user"></UserIcon>
          )}
        </UserImgLabel>
        <UserImgInput
          type="file"
          onChange={(e) => setUserImage(e.target.files[0])}
          name="userimg"
          id="userimg"
          accept="image/png, image/jpeg"
        />
        {userInfoNames.map((userInfo) => (
          <div
            key={userInfo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <UserInfoElement>{userInfo.userInfoName}:</UserInfoElement>
            <UserInfo>{userInfo.userInfo}</UserInfo>
          </div>
        ))}
      </Modal>
    </>
  );
}

export default Profile;
