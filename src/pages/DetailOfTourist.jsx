import React, { useState, useEffect } from "react";
import {
  BigContainer,
  ContentContainer,
  Circle,
  DataContainer,
  DataWrapper,
  Column,
  Input,
  Text,
  Button,
  PopupContainer,
  ModalPopup,
  SuccessImage,
  TextPopup,
  PopupWrapper,
} from "../styles/DetailOfTourist-styled";
import Image from "../assets/image4.jpg";
import { updateTourist } from "../api/auth";
import SuccessIcon from "../assets/success.svg";

function DetailOfTourist(props) {
  // handle popup
  const [popup, setPopup] = useState(false);

  const [data, setData] = useState({
    tourist_name: props.location.state.name,
    tourist_email: props.location.state.email,
    tourist_location: props.location.state.location,
  });

  const [id] = useState(props.location.state.id);

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
      const res = await updateTourist(token, data, id);
      if (res.status === 200) {
        setPopup(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect for handle popup
  useEffect(() => {
    if (popup) {
      setTimeout(() => {
        setPopup(false);
      }, 1500);
    }
  }, [popup]);

  return (
    <>
      <BigContainer image={Image}>
        <ContentContainer>
          <Circle image={props.location.state.picture}></Circle>
          <DataContainer onSubmit={handleSubmit}>
            <DataWrapper>
              <Column className="title">
                Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
              </Column>
              <Column>
                <Input
                  type="text"
                  value={data.tourist_name}
                  name="tourist_name"
                  onChange={handleInputChange}
                />
              </Column>
            </DataWrapper>
            <DataWrapper>
              <Column className="title">
                Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
              </Column>
              <Column>
                <Input
                  type="text"
                  value={data.tourist_email}
                  name="tourist_email"
                  onChange={handleInputChange}
                />
              </Column>
            </DataWrapper>
            <DataWrapper>
              <Column className="title">Location : </Column>
              <Column>
                <Input
                  type="text"
                  value={data.tourist_location}
                  name="tourist_location"
                  onChange={handleInputChange}
                />
              </Column>
            </DataWrapper>
            <Text>Klik row untuk mengubah data</Text>
            <Button type="submit">Simpan</Button>
          </DataContainer>
        </ContentContainer>
        {popup && (
          <PopupContainer>
            <PopupWrapper>
              <ModalPopup>
                <SuccessImage src={SuccessIcon} alt="icon" />
                <TextPopup>Success</TextPopup>
              </ModalPopup>
            </PopupWrapper>
          </PopupContainer>
        )}
      </BigContainer>
    </>
  );
}

export default DetailOfTourist;
