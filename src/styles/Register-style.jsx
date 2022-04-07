import styled from "styled-components";

export const BigContainer = styled.div`
  @media (min-width: 575px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    position: relative;
  }
`;

export const DarkShadow = styled.div`
  @media (min-width: 575px) {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  @media (min-width: 575px) {
    width: 25vw;
    height: 32vw;
    background-color: #fff;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Text = styled.p`
  @media (min-width: 575px) {
    font-size: 2vw;
    font-weight: 700;
    color: #4bc1a7;
    margin-left: -11.5vw;
    &.login {
      margin-left: -14.5vw;
    }
  }
`;

export const ContainerInput = styled.form`
  @media (min-width: 575px) {
    width: 25vw;
    /* background: salmon; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
  }
`;

export const InputWrapper = styled.div`
  @media (min-width: 575px) {
    position: relative;
  }
`;
export const Input = styled.input`
  @media (min-width: 575px) {
    width: 20vw;
    height: 3vw;
    background-color: #f6f7fa;
    border: none;
    border-radius: 0.5vw;
    outline: none;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    padding-left: 3vw;
    font-size: 1vw;
    font-weight: 400;
    color: #9d9fa0;
    &::placeholder {
      font-size: 1vw;
      font-weight: 400;
      color: #9d9fa0;
    }
  }
`;

export const Icon = styled.img`
  @media (min-width: 575px) {
    width: 1.2vw;
    position: absolute;
    left: 1vw;
    top: 1vw;
    &.password {
      top: 0.5vw;
    }
    &.name {
      top: 0.7vw;
    }
  }
`;

export const Button = styled.button`
  @media (min-width: 575px) {
    width: 20vw;
    height: 3vw;
    background: #4bc1a7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.5vw;
    font-size: 1vw;
    font-weight: 500;
    color: #fff;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.2vw;
    margin-top: 5vw;
    &:hover {
      cursor: pointer;
      background: #3b9984;
    }
  }
`;

export const Text2 = styled.p`
  @media (min-width: 575px) {
    font-size: 0.9vw;
    font-weight: 500;
    color: #9d9fa0;
    margin-top: 1vw;
  }
`;

export const Angkor = styled.a`
  @media (min-width: 575px) {
    text-decoration: none;
    font-size: 0.9vw;
    font-weight: 500;
    margin-top: 1vw;
    color: #0082cd;
  }
`;
