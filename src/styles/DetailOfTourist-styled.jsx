import styled, { keyframes } from "styled-components";

export const BigContainer = styled.div`
  @media (min-width: 575px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const ContentContainer = styled.div`
  @media (min-width: 575px) {
    width: 30vw;
    height: 35vw;
    background: #fff;
    border-radius: 1.5vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Circle = styled.div`
  @media (min-width: 575px) {
    width: 6vw;
    height: 6vw;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin-top: 2vw;
  }
`;

export const DataContainer = styled.form`
  @media (min-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    width: 100%;
    margin-top: 2vw;
    /* background: papayawhip; */
  }
`;

export const DataWrapper = styled.div`
  @media (min-width: 575px) {
    width: 25vw;
    height: 3.5vw;
    background: #f6f7fa;
    border-radius: 0.5vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  @media (min-width: 575px) {
    width: 70%;
    height: 3.5vw;
    /* background: skyblue; */
    box-sizing: border-box;
    /* border: 1px solid black; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1vw;
    font-weight: 600;
    color: #111;
    padding-left: 1vw;
    &.title {
      width: 30%;
    }
  }
`;

export const Input = styled.input`
  @media (min-width: 575px) {
    width: 100%;
    height: 3vw;
    background: #f6f7fa;
    border: none;
    outline: none;
    font-size: 1vw;
    font-weight: 400;
    color: #989898;
    font-family: "Poppins", sans-serif;
  }
`;

export const Text = styled.p`
  @media (min-width: 575px) {
    font-size: 0.8vw;
    font-weight: 500;
    color: #3b9984;
    margin-top: -0.5vw;
  }
`;

export const Button = styled.button`
  @media (min-width: 575px) {
    width: 8vw;
    height: 2.8vw;
    background: #4bc1a7;
    border-radius: 0.5vw;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9vw;
    font-weight: 400;
    color: #fff;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1vw;
    margin-top: -1vw;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const PopupContainer = styled.div`
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
    &.create {
      z-index: 5;
    }
  }
`;

const animation = keyframes`
from {
    margin-bottom: -15vw;
}
to {
    margin-bottom: 0vw;
}
`;

export const ModalPopup = styled.div`
  @media (min-width: 575px) {
    width: 15vw;
    height: 7vw;
    background: #fff;
    border-radius: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    margin-bottom: 0vw;
    animation-name: ${animation};
    animation-duration: 1s;
  }
`;

export const SuccessImage = styled.img`
  @media (min-width: 575px) {
    width: 3vw;
  }
`;

export const TextPopup = styled.p`
  @media (min-width: 575px) {
    font-size: 1vw;
    font-weight: 500;
    color: #3b9984;
  }
`;

export const PopupWrapper = styled.div`
  @media (min-width: 575px) {
    width: 15vw;
    height: 7vw;
    /* background: salmon; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;
