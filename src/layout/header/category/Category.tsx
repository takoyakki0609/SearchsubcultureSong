import { useState } from "react";
import * as St from "../Header.styled";
import { useRecoilState } from "recoil";
import { typeState, clickState } from "../../../state/Atom";

const Category = () => {
  const [value, setValue] = useRecoilState(typeState);
  const [click, setClick] = useRecoilState(clickState);

  const handleTaejinClick = () => {
    setValue("태진");
    setClick("selectness!");
  };

  const handleGeumyoungClick = () => {
    setValue("금영");
    setClick("selectness!");
  };

  return (
    <>
      <St.ButtonWrapper>
        <St.SelecButton onClick={handleTaejinClick}>태진</St.SelecButton>
        <St.SelecButton onClick={handleGeumyoungClick}>금영</St.SelecButton>
      </St.ButtonWrapper>
    </>
  );
};

export default Category;
