import * as St from "../Header.styled";
import { useRecoilState } from "recoil";
import { typeState } from "../../../state/Atom";

const Category = () => {
  const [value, setValue] = useRecoilState(typeState);

  const handleTaejinClick = () => {
    setValue("태진");
  };

  const handleGeumyoungClick = () => {
    setValue("금영");
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
