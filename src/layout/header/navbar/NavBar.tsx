import { Link } from "react-router-dom";
import * as St from "../Header.styled";

const NavBar = () => {
  return (
    <>
      <St.DataWrapper>
        <St.DataTitle>
          <Link to={"/animation"}>애니메이션</Link>
        </St.DataTitle>
        <St.DataTitle>
          <Link to={"/utaite"}>우타이테</Link>
        </St.DataTitle>
        <St.DataTitle>
          <Link to={"/vocaloid"}>보컬로이드</Link>
        </St.DataTitle>
      </St.DataWrapper>
    </>
  );
};

export default NavBar;
