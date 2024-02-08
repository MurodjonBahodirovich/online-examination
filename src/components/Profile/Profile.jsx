import React, { useState } from "react";
import Modal from "../Modal/Modal";
import {
  UserIcon,
  UserImage,
  UserImgInput,
  UserImgLabel,
} from "./Profile.styles";

function Profile({ closeModal }) {
  const [userImage, setUserImage] = useState(null);

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
      </Modal>
    </>
  );
}

export default Profile;
