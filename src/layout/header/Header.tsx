import { Link } from "react-router-dom";
import * as St from "./Header.styled";
import SearchInput from "./SearchInput";
import Category from "./category/Category";
import { useRecoilValue } from "recoil";
import { typeState } from "../../state/Atom";
import NavBar from "./navbar/NavBar";

const Header = () => {
  const selectness = useRecoilValue(typeState);
  return (
    <St.Container>
      <St.TitleWrapper>
        <St.TItle>
          <Link to="/">노래방 번호 검색기</Link>
        </St.TItle>
      </St.TitleWrapper>
      {selectness ? <NavBar /> : <Category />}
      {selectness ? <SearchInput /> : <></>}
    </St.Container>
  );
};

export default Header;
