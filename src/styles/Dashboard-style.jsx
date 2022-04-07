import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const BigContainer = styled.div`
  @media (min-width: 575px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${(props) => props.image});
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    position: relative;
  }
`;

export const DarkShadow = styled.div`
  @media (min-width: 575px) {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const ContentContainer = styled.div`
  @media (min-width: 575px) {
    width: 80vw;
    height: 90vh;
    background: #fff;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
  }
`;

export const FeaturesWrapper = styled.div`
  @media (min-width: 575px) {
    width: 80vw;
    height: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* border-bottom: 0.1vw solid #e7e7e7; */
  }
`;

export const InputContainer = styled.div`
  @media (min-width: 575px) {
    position: relative;
    margin-right: 2vw;
  }
`;

export const SearchInput = styled.input`
  @media (min-width: 575px) {
    width: 15vw;
    height: 2vw;
    background: #f6f7fa;
    border-radius: 0.4vw;
    border: none;
    outline: none;
    box-sizing: border-box;
    padding-left: 2vw;
    font-family: "Poppins", sans-serif;
    font-size: 0.8vw;
    font-weight: 400;
    color: #9d9fa0;
  }
`;

export const Icon = styled.img`
  @media (min-width: 575px) {
    width: 1.3vw;
    position: absolute;
    left: 0.5vw;
    top: 0.5vw;
  }
`;

export const TableHeader = styled.div`
  @media (min-width: 575px) {
    width: 80vw;
    height: 3vw;
    background: #f7f7f9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  @media (min-width: 575px) {
    width: 33.33%;
    height: 3vw;
    /* border: 1px solid black; */
    box-sizing: border-box;
    display: flex;
    justify-items: flex-start;
    align-items: center;
    font-size: 1vw;
    font-weight: 500;
    color: #a7a7a7;
    padding-left: 7vw;
    &.data {
      color: #111;
      font-size: 0.9vw;
    }

    &.data.action {
      gap: 2vw;
    }
  }
`;

export const TableContent = styled.div`
  @media (min-width: 575px) {
    width: 80vw;
    height: 3vw;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerPagination = styled.div`
  @media (min-width: 575px) {
    width: 100%;
    height: 2vw;
    /* background: skyblue; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const PaginationWrapper = styled.div`
  @media (min-width: 575px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-right: 4vw;
  }
`;

export const TextOfPage = styled.p`
  @media (min-width: 575px) {
    font-size: 1vw;
    font-weight: 500;
    color: #a7a7a7;
  }
`;

export const Arrow = styled.img`
  @media (min-width: 575px) {
    width: 0.7vw;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ActionImage = styled.img`
  @media (min-width: 575px) {
    width: 1.3vw;
    &:hover {
      cursor: pointer;
    }
  }
`;

// style for delete popup
export const PopupContainer = styled.div`
  @media (min-width: 575px) {
    width: 15vw;
    height: 5vw;
    background: #fff;
    position: absolute;
    top: 2vw;
    border-radius: 1vw;
    box-shadow: 0px 0.3px 2.2px rgba(75, 193, 167, 0.02),
      0px 0.7px 5.3px rgba(75, 193, 167, 0.028),
      0px 1.3px 10px rgba(75, 193, 167, 0.035),
      0px 2.2px 17.9px rgba(75, 193, 167, 0.042),
      0px 4.2px 33.4px rgba(75, 193, 167, 0.05),
      0px 10px 80px rgba(75, 193, 167, 0.07);
    font-size: 0.9vw;
    font-weight: 500;
    color: #3b9984;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Angkor = styled(Link)`
  @media (min-width: 575px) {
    text-decoration: none;
  }
`;

export const AddWrapper = styled.div`
  @media (min-width: 575px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
  }
`;

export const Circle = styled.div`
  @media (min-width: 575px) {
    width: 2.5vw;
    height: 2.5vw;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 2vw;
    box-shadow: 0px 0.3px 2.2px rgba(0, 0, 0, 0.02),
      0px 0.7px 5.3px rgba(0, 0, 0, 0.028), 0px 1.3px 10px rgba(0, 0, 0, 0.035),
      0px 2.2px 17.9px rgba(0, 0, 0, 0.042),
      0px 4.2px 33.4px rgba(0, 0, 0, 0.05), 0px 10px 80px rgba(0, 0, 0, 0.07);
    &:hover {
      cursor: pointer;
    }
  }
`;

export const AddImage = styled.img`
  @media (min-width: 575px) {
    width: 1.5vw;
  }
`;

export const AddText = styled.p`
  @media (min-width: 575px) {
    font-size: 1vw;
    font-weight: 400;
    color: #a7a7a7;
  }
`;

// style for profil user
export const ContainerUser = styled.div`
  @media (min-width: 575px) {
    width: 10vw;
    height: 5vw;
    /* background-color: salmon; */
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const UserCircleContainer = styled.div`
  @media (min-width: 575px) {
    width: 2.5vw;
    height: 2.5vw;
    background: #fff;
    border-radius: 50%;
  }
`;

export const UserName = styled.p`
  @media (min-width: 575px) {
    font-size: 1vw;
    font-weight: 600;
    color: #fff;
    user-select: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

const dropdwonAnimation = keyframes`
from {
  height: 0vw;
}to {
  height: 7vw;
}
`;

export const DropdownContainer = styled.div`
  @media (min-width: 575px) {
    width: 9vw;
    height: 7vw;
    background: #fff;
    position: absolute;
    top: 4.5vw;
    right: 0.5vw;
    border-radius: 0.5vw;
    animation-name: ${dropdwonAnimation};
    animation-duration: 0.5s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }
`;

export const CloseWrapper = styled.div`
  @media (min-width: 575px) {
    width: 100%;
    height: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    border-top: 0.1vw solid #dbdbdb;
    box-sizing: border-box;
    background-color: #e2dede;
  }
`;

export const CloseImage = styled.img`
  @media (min-width: 575px) {
    width: 1.3vw;
  }
`;
export const CloseText = styled.div`
  @media (min-width: 575px) {
    font-size: 1vw;
    font-weight: 500;
    color: #989898;
    user-select: none;
  }
`;

export const Angkor2 = styled.a`
  @media (min-width: 575px) {
    text-decoration: none;
  }
`;

export const UserEmailWrapper = styled.div`
  @media (min-width: 575px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const EmailText = styled.p`
  @media (min-width: 575px) {
    font-size: 0.8vw;
    font-weight: 500;
    color: #989898;
    width: 65%;
    box-sizing: border-box;
    /* border: 1px solid black; */
    word-wrap: break-word;
    &.key {
      width: 35%;
    }
  }
`;
