import { Link } from "react-router-dom";
import * as St from "./Header.styled";
import SearchInput from "./SearchInput";
const Header = () => {
  return (
    <St.Container>
      <St.TitleWrapper>
        <St.TItle>노래방 번호 검색기</St.TItle>
      </St.TitleWrapper>
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
      <SearchInput />
    </St.Container>
  );
};

export default Header;
