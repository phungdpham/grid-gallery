/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { ProfileImage } from "./ProfileImage";

const UserGridStyled = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
  gap: 15px;
  grid-template-areas:
    "photo name"
    "photo label"
    "photo description";
  
  @media (max-width: 990px) {
    grid-template-areas: "photo name"
                         "label . "
                         "description .";
  }
`;

export const MiniUserGrid = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
`;

const Photo = styled.div`
  grid-area: photo;
`;

const Name = styled.div`
  grid-area: name;
  font-size: 35px;
  align-self: center;
`;

const Label = styled.div`
  grid-area: label;
  @media (max-width) {
    padding-left: 25px;
  }`;

const Description = styled.div`
  grid-area: description;
  max-width: 400px;
  @media (max-width:900px) {
    padding-left: 25px;
    grid-column: 1 /3 ;
  }
`;

export default function () {
  return (
    <UserGridStyled>
      <Photo>
        <ProfileImage />
      </Photo>
      <Name>GridGallery</Name>
      <Label>
        <strong> 400 </strong>Followers
      </Label>
      <Description>
        Hoodie cronut slow-carb pinterest meditation drinking vinegar
        gluten-free wayfarers. Gastropub subway tile freegan mlkshk
        farm-to-table kogi normcore scenester. Live-edge adaptogen hella,
        meggings seitan sriracha microdosing cloud bread.{" "}
      </Description>
    </UserGridStyled>
  );
}
