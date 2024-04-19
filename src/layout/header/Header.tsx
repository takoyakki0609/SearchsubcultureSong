import * as St from "./Header.styled";
import SearchInput from "./SearchInput";
import { useRecoilValue } from "recoil";
import { typeState } from "../../state/Atom";
const Header = () => {
  const selectness = useRecoilValue(typeState);
  return (
    <St.Container>
      <St.TitleWrapper>
        <St.TItle>노래방 번호 검색기</St.TItle>
        <>선택된 노래방 기기는 {selectness} 입니다.</>
      </St.TitleWrapper>
      <SearchInput />
    </St.Container>
  );
};

export default Header;
