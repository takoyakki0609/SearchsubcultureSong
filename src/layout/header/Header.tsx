import * as St from "./Header.styled";
import SearchInput from "./SearchInput";
import { useRecoilState } from "recoil";
import { typeState } from "../../state/Atom";
import Category from "./category/Category";
const Header = () => {
  const [selectness, setSelectness] = useRecoilState(typeState);

  const handleClickReset = () => {
    setSelectness("");
  };

  return (
    <St.Container>
      <St.TitleWrapper>
        <St.TItle onClick={handleClickReset}>노래방 번호 검색기</St.TItle>
        <St.Info>선택된 노래방 기기는 {selectness} 입니다.</St.Info>
      </St.TitleWrapper>
      {selectness ? (
        <>
          <SearchInput />
        </>
      ) : (
        <>
          <Category />
        </>
      )}
    </St.Container>
  );
};

export default Header;
