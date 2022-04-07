import React, { useState, useEffect } from "react";
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
import { useHistory } from "react-router-dom";
import emailIcon from "../assets/email.svg";
import passwordIcon from "../assets/password.svg";
import Image2 from "../assets/image2.jpg";
import { login } from "../api/auth";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const history = useHistory();

  const token = window.localStorage.getItem("biro_perjalanan");
  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, []);

  const submitHandle = async (e) => {
    e.preventDefault();

    const datas = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await login(datas);
      const { Token, Name, Email } = res.data.data;

      window.localStorage.setItem("biro_perjalanan", Token);
      window.localStorage.setItem("name", Name);
      window.localStorage.setItem("email", Email);
      // console.log(res);
      history.push("/");
    } catch (error) {
      console.log(error.response.status);
    }
  };

  return (
    <>
      <BigContainer image={Image2}>
        <DarkShadow>
          <ContentContainer>
            <Text className="login">Login</Text>
            <ContainerInput onSubmit={submitHandle}>
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
              <Button>Login</Button>
              <Text2>
                Belum punya akun ? <Angkor href="/register">Daftar</Angkor>
              </Text2>
            </ContainerInput>
          </ContentContainer>
        </DarkShadow>
      </BigContainer>
    </>
  );
}

export default Register;
