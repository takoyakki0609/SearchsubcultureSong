import * as St from "./Header.styled";

const SearchInput = () => {
  return (
    <St.SearchWrapper>
      <St.SearchArea placeholder="노래제목 또는 가수명으로 검색이 가능합니다"></St.SearchArea>

      <St.SearchBtn>검색</St.SearchBtn>
    </St.SearchWrapper>
  );
};

export default SearchInput;
