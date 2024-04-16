import { useState } from "react";
import * as St from "../Header.styled";
import { useRecoilState } from "recoil";
import { typeState } from "../../../state/Atom";

const Category = () => {
  const [value, setValue] = useRecoilState(typeState);

  return (
    <>
      <St.ButtonWrapper>
        <St.SelecButton>태진</St.SelecButton>
        <St.SelecButton>금영</St.SelecButton>
      </St.ButtonWrapper>
    </>
  );
};

export default Category;
