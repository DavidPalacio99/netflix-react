import React from "react";
import "./Modal.css";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { genre } from "./genre";

const Modal = ({ closeModal, setCloseModal, movie }) => {
  const {
    title,
    poster_path,
    overview,
    genre_ids,
    first_air_date,
    release_date,
    name,
  } = movie;

  const listGenders = genre.filter((gender) => genre_ids?.includes(gender.id));

  return (
    <div className={`modal ${closeModal ? "active" : ""}`}>
      <StyledWrapper>
        <Dialog>
          <ThumbnailWrapper>
            <Thumbnail
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              title={title || name}
              width="220"
              height="330"
              loading="lazy"
            />
          </ThumbnailWrapper>
          <Content>
            <Title>{title || name}</Title>
            <Overview>{overview}</Overview>
            <Details>
              <li>
                {first_air_date?.split("-")[0] || release_date?.split("-")[0]}
              </li>
              <li className="tags">
                {listGenders.map((gender) => (
                  <Tag key={gender.id}>{gender.name}</Tag>
                ))}
              </li>
            </Details>
            <ButtonActions>
              <Button isPrimary>
                {/* <BsFillPlayFill /> */}
                Watch now
              </Button>
              <Button isPrimary>
                {/* <AiOutlinePlus /> */}
                Watch later
              </Button>
            </ButtonActions>
          </Content>
          <ButtonClose
            onClick={() => {
              setCloseModal(true);
            }}
          >
            <IoMdClose />
          </ButtonClose>
        </Dialog>
      </StyledWrapper>
    </div>
  );
};

const Tag = styled.span`
  border: 1px solid #a7a9be;
  border-radius: 5px;
  padding: 3px;
`;
const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  z-index: 100000000000;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dialog = styled.div`
  position: relative;
  display: flex;
  // border: 1px solid red;
  max-width: 80vw;
  overflow: hidden;
  gap: 2rem;
  padding: 0 1rem;

  flex-direction: column;
  @media screen and (min-width: 1100px) {
    flex-direction: row;
    max-width: 50%;
  }
`;

const ThumbnailWrapper = styled.div`
  text-align: center;
  flex-shrink: 0;
`;

const Thumbnail = styled.img`
  border-radius: 4px;
  max-width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.6rem;
`;

const Overview = styled.p`
  color: #fff;
  line-height: 1.5rem;
  font-size: 1rem;
  //cutting paragraph ...
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const Details = styled.ul`
  list-style: none;
  color: #a7a9be;
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;

  .tags {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`;

const ButtonActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.625rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ isPrimary }) => (isPrimary ? "#e50914" : "transparent")};
  border: 1px solid #e50914;
  color: ${({ isPrimary }) => "#fff" || "#e50914"};

  &:active {
    transform: scale(0.96);
  }
`;

const ButtonClose = styled.button`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;

  &:active {
    transform: scale(0.96);
  }
`;

export default Modal;
