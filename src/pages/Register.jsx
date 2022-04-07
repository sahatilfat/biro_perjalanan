import React, { useState } from "react";
import {
  BigContainer,
  DarkShadow,
  ContentContainer,
  Text,
  ContainerInput,
  InputWrapper,
  Input,
  Icon,
  Button,
  Text2,
  Angkor,
} from "../styles/Register-style";
import emailIcon from "../assets/email.svg";
import passwordIcon from "../assets/password.svg";
import nameIcon from "../assets/name.svg";
import Image from "../assets/image1.jpg";
import { register } from "../api/auth";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [response, setResponse] = useState("");

  const inputHandle = (e) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await register(data);
      console.log(res);
    } catch (error) {
      setResponse(error.response.status);
    }
  };

  return (
    <>
      <BigContainer image={Image}>
        <DarkShadow>
          <ContentContainer>
            <Text>Register</Text>
            <ContainerInput onSubmit={submitHandle}>
              <InputWrapper>
                <Icon src={nameIcon} alt="icon" className="name" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Nama"
                  value={data.name}
                  onChange={inputHandle}
                />
              </InputWrapper>
              <InputWrapper>
                <Icon src={emailIcon} alt="icon" />
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={inputHandle}
                />
              </InputWrapper>
              <InputWrapper>
                <Icon src={passwordIcon} alt="icon" className="password" />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={inputHandle}
                />
              </InputWrapper>
              <Button type="submit">Register</Button>
              <Text2>
                sudah punya akun ? <Angkor href="/login">Login</Angkor>
              </Text2>
            </ContainerInput>
          </ContentContainer>
        </DarkShadow>
      </BigContainer>
    </>
  );
}

export default Register;
