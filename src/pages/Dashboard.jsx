import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTourist, deleteTourist, findTourist } from "../api/auth";
import Image from "../assets/image3.jpg";
import {
  BigContainer,
  DarkShadow,
  ContentContainer,
  FeaturesWrapper,
  InputContainer,
  SearchInput,
  Icon,
  TableHeader,
  Column,
  TableContent,
  ContainerPagination,
  PaginationWrapper,
  Arrow,
  TextOfPage,
  ActionImage,
  PopupContainer,
  Angkor,
  Circle,
  AddImage,
  AddWrapper,
  AddText,
  ContainerUser,
  UserCircleContainer,
  UserName,
  DropdownContainer,
  CloseImage,
  CloseText,
  Angkor2,
  CloseWrapper,
  UserEmailWrapper,
  EmailText,
} from "../styles/Dashboard-style";
import SearchIcon from "../assets/search.svg";
import NextArrow from "../assets/next.svg";
import PrevArrow from "../assets/prev.svg";
import DeleteIcon from "../assets/delete.svg";
import PreviewIcon from "../assets/preview.svg";
import AddIcon from "../assets/plus.svg";
import CreateTourist from "../components/CreateTourist";
import CloseIcon from "../assets/close.svg";

function Dashboard() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // state to handle create tourist
  const [create, setCreate] = useState(false);
  const handleCreate = (e) => {
    e.stopPropagation();
    setCreate((prev) => !prev);
  };

  const [deleteResponse, setDeleteResponse] = useState({
    status: false,
    message: "Data berhasil dihapus",
  });

  // search handle
  const [search, setSearch] = useState("");

  // handle search change
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // state to hanle dropdown
  const [show, setShow] = useState(false);

  const history = useHistory();

  const token = window.localStorage.getItem("biro_perjalanan");

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token]);

  useEffect(() => {
    const req = async () => {
      try {
        const res = await getTourist(token, page);
        setData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    req();
  }, [token, page]);

  const deleteHandle = async (token, id) => {
    try {
      const res = await deleteTourist(token, id);
      if (res.status === 200) {
        const get = await getTourist(token, page);
        setData(get.data.data);
        setDeleteResponse((prev) => ({
          ...prev,
          status: true,
          message: "Data berhasil dihapus",
        }));
      }
    } catch (error) {
      console.log(error.data.message);
    }
  };

  // handle close popup when open
  useEffect(() => {
    if (deleteResponse.status) {
      setTimeout(() => {
        setDeleteResponse((prev) => ({
          ...prev,
          status: false,
        }));
      }, 1000);
    }
  }, [deleteResponse.status]);

  //  useEffec for search change
  useEffect(() => {
    const request = async () => {
      if (search !== "") {
        try {
          const res = await findTourist(token, search);
          if (res.status === 200) {
            let arr = [];
            arr.push(res.data);
            setData(arr);
          }
          // console.log(res.data);
        } catch (error) {
          console.log(error.message);
        }
      }
      if (search === "") {
        try {
          const res = await getTourist(token, page);
          if (res.status === 200) {
            setData(res.data.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    request();
  }, [search]);

  let nameOfUser = window.localStorage.getItem("name");
  let emailOfUser = window.localStorage.getItem("email");
  return (
    <>
      <BigContainer image={Image}>
        <DarkShadow>
          {deleteResponse.status && (
            <PopupContainer>{deleteResponse.message}</PopupContainer>
          )}
          <ContentContainer>
            <FeaturesWrapper>
              <AddWrapper>
                <Circle onClick={handleCreate}>
                  <AddImage src={AddIcon} alt="icon" />
                </Circle>
                <AddText>Tambah tourist</AddText>
              </AddWrapper>

              <InputContainer>
                <Icon src={SearchIcon} alt="icon" />
                <SearchInput
                  type="text"
                  value={search}
                  name="search"
                  onChange={handleSearchChange}
                  placeholder="Masukkan id"
                />
              </InputContainer>
            </FeaturesWrapper>
            <TableHeader>
              <Column>Name</Column>
              <Column>Email</Column>
              <Column>Action</Column>
            </TableHeader>
            {data.map((dt, index) => (
              <TableContent key={index}>
                <Column className="data">{dt.tourist_name}</Column>
                <Column className="data">{dt.tourist_email}</Column>
                <Column className="data action">
                  <Angkor
                    to={{
                      pathname: "/detail",
                      state: {
                        id: dt.id,
                        name: dt.tourist_name,
                        email: dt.tourist_email,
                        location: dt.tourist_location,
                        picture: dt.tourist_profilepicture,
                      },
                    }}
                  >
                    <ActionImage src={PreviewIcon} alt="icon" />
                  </Angkor>
                  <ActionImage
                    src={DeleteIcon}
                    alt="icon"
                    onClick={() => deleteHandle(token, dt.id)}
                  />
                </Column>
              </TableContent>
            ))}
            <ContainerPagination>
              <PaginationWrapper>
                <Arrow
                  src={PrevArrow}
                  alt="icon"
                  onClick={() => {
                    if (page !== 1) {
                      setPage((prev) => prev - 1);
                    }
                  }}
                />
                <TextOfPage>{page}</TextOfPage>
                <Arrow
                  src={NextArrow}
                  alt="icon"
                  onClick={() => {
                    setPage((prev) => prev + 1);
                  }}
                />
              </PaginationWrapper>
            </ContainerPagination>
          </ContentContainer>
        </DarkShadow>
        {create && (
          <CreateTourist handleCreate={handleCreate} setCreate={setCreate} />
        )}
        <ContainerUser>
          <UserCircleContainer></UserCircleContainer>
          <UserName onClick={() => setShow((prev) => !prev)}>
            {nameOfUser}
          </UserName>
        </ContainerUser>
        {show && (
          <Angkor2 href="/logout">
            <DropdownContainer>
              <UserEmailWrapper>
                {/* <EmailText className="key">Email</EmailText> */}
                <EmailText>{emailOfUser}</EmailText>
              </UserEmailWrapper>
              <CloseWrapper>
                <CloseImage src={CloseIcon} alt="icon" />
                <CloseText>Logout</CloseText>
              </CloseWrapper>
            </DropdownContainer>
          </Angkor2>
        )}
      </BigContainer>
    </>
  );
}

export default Dashboard;
