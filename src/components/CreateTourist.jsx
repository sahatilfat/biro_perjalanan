import React, { useState, useEffect } from "react";
import {
  BigContainer,
  DarkShadow,
  Modal,
  Title,
  ContentContainer,
  InputWrapper,
  Input,
  InputImage,
  Button,
} from "../styles/CreateTourist-style";
import {
  PopupContainer,
  PopupWrapper,
  ModalPopup,
  SuccessImage,
  TextPopup,
} from "../styles/DetailOfTourist-styled";
import NameIcon from "../assets/name.svg";
import EmailIcon from "../assets/email.svg";
import LocationIcon from "../assets/location.svg";
import { createTourist } from "../api/auth";
import SuccessIcon from "../assets/success.svg";

function CreateTourist({ handleCreate, setCreate }) {
  const [data, setData] = useState({
    tourist_name: "",
    tourist_email: "",
    tourist_location: "",
  });

  const [resMessage, setResMessage] = useState({
    status: false,
    message: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const token = window.localStorage.getItem("biro_perjalanan");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createTourist(token, data);
      if (res.status === 201) {
        setResMessage((prev) => ({
          ...prev,
          status: true,
          message: "Created",
        }));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (resMessage.status) {
      setTimeout(() => {
        setResMessage((prev) => ({
          ...prev,
          status: false,
        }));
        setCreate(false);
      }, 1500);
    }
  }, [resMessage.status]);

  return (
    <>
      <BigContainer>
        <DarkShadow onClick={handleCreate} />
        <Modal>
          <Title>Masukkan data tourist</Title>
          <ContentContainer onSubmit={handleSubmit}>
            <InputWrapper>
              <InputImage src={NameIcon} alt="icon" />
              <Input
                type="text"
                name="tourist_name"
                value={data.tourist_name}
                onChange={handleInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <InputImage src={EmailIcon} alt="icon" />
              <Input
                type="text"
                name="tourist_email"
                value={data.tourist_email}
                onChange={handleInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <InputImage src={LocationIcon} alt="icon" />
              <Input
                type="text"
                name="tourist_location"
                value={data.tourist_location}
                onChange={handleInputChange}
              />
            </InputWrapper>
            <Button type="submit">Tambah</Button>
          </ContentContainer>
        </Modal>
        {resMessage.status && (
          <PopupContainer className="create">
            <PopupWrapper>
              <ModalPopup>
                <SuccessImage src={SuccessIcon} alt="icon" />
                <TextPopup>{resMessage.message}</TextPopup>
              </ModalPopup>
            </PopupWrapper>
          </PopupContainer>
        )}
      </BigContainer>
    </>
  );
}

export default CreateTourist;
