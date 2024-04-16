import { Link } from "react-router-dom";
import * as St from "./Header.styled";
import SearchInput from "./SearchInput";
import Category from "./category/Category";
const Header = () => {
  return (
    <St.Container>
      <St.TitleWrapper>
        <St.TItle>노래방 번호 검색기</St.TItle>
      </St.TitleWrapper>
      <Category />
      <SearchInput />
    </St.Container>
  );
};

export default Header;
