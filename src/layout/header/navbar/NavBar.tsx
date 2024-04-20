import { Link } from "react-router-dom";
import * as St from "../Header.styled";
import { useSetRecoilState } from "recoil";
import { searchValueState } from "../../../state/Atom";

const NavBar = () => {
  const setSearchValue = useSetRecoilState(searchValueState);

  const handleLinkClick = () => {
    setSearchValue("");
  };
  return (
    <>
      <St.DataWrapper>
        <St.DataTitle>
          <Link to={"/animation"} onClick={handleLinkClick}>
            애니메이션
          </Link>
        </St.DataTitle>
        <St.DataTitle>
          <Link to={"/utaite"} onClick={handleLinkClick}>
            우타이테
          </Link>
        </St.DataTitle>
        <St.DataTitle>
          <Link to={"/vocaloid"} onClick={handleLinkClick}>
            보컬로이드
          </Link>
        </St.DataTitle>
      </St.DataWrapper>
    </>
  );
};

export default NavBar;
