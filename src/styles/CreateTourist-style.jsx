import styled from "styled-components";

export const BigContainer = styled.div`
  @media (min-width: 575px) {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DarkShadow = styled.div`
  @media (min-width: 575px) {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0, 5);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Modal = styled.div`
  @media (min-width: 575px) {
    width: 30vw;
    height: 25vw;
    background: #fff;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: 3;
  }
`;

export const Title = styled.p`
  @media (min-width: 575px) {
    font-size: 1.5vw;
    font-weight: 600;
    color: #3b9984;
  }
`;

export const ContentContainer = styled.form`
  @media (min-width: 575px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    /* background: papayawhip; */
  }
`;

export const InputWrapper = styled.div`
  @media (min-width: 575px) {
    position: relative;
    top: 2vw;
  }
`;

export const Input = styled.input`
  @media (min-width: 575px) {
    width: 25vw;
    height: 2.5vw;
    background: #f6f7fa;
    border: none;
    outline: none;
    border-radius: 0.5vw;
    box-sizing: border-box;
    padding-left: 3vw;
    font-family: "Poppins", sans-serif;
    font-size: 1vw;
    font-weight: 400;
    color: #989898;
  }
`;

export const InputImage = styled.img`
  @media (min-width: 575px) {
    width: 1vw;
    position: absolute;
    top: 0.7vw;
    left: 1vw;
  }
`;

export const Button = styled.button`
  @media (min-width: 575px) {
    width: 8vw;
    height: 2.7vw;
    background: #4bc1a7;
    border: none;
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.1vw;
    font-family: "Poppins", sans-serif;
    margin-top: 4vw;
    &:hover {
      cursor: pointer;
    }
  }
`;
