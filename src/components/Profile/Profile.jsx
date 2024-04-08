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
      userInfoName: "ism",
      userInfo: "Murodjon",
    },
    {
      userInfoName: "Familiya",
      userInfo: "Halilov",
    },
    {
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
          <UserInfoElement key={userInfo.userInfoName}>
            {userInfo.userInfoName} : <UserInfo>{userInfo.userInfo}</UserInfo>
          </UserInfoElement>
        ))}
      </Modal>
    </>
  );
}

export default Profile;
