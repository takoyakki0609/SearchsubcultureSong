import { useState } from "react";
import * as St from "./Header.styled";
import anisong from "../../api/animation.json";
import utaite from "../../api/utaite.json";
import vocaloid from "../../api/vocaloid.json";
import { useRecoilState } from "recoil";
import { searchDataState, searchValueState } from "../../state/Atom";
import { SongData } from "../../types/types";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useRecoilState<SongData[]>(searchDataState);
  const [recentSearchTerm, setRecentSearchTerm] =
    useRecoilState(searchValueState);

  const searchData = (data: SongData[]): SongData[] => {
    return data.filter((item) =>
      item.some((info) => info.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const handleSearch = () => {
    const allData = [anisong, utaite, vocaloid];
    const foundItems = allData.map((data) => searchData(data)).flat();
    setResults(foundItems);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
      setRecentSearchTerm(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <>
      <St.SearchWrapper
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <St.SearchArea
          placeholder="이곳에 검색해주세요"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        ></St.SearchArea>

        <St.SearchBtn type="submit">검색</St.SearchBtn>
      </St.SearchWrapper>
    </>
  );
};

export default SearchInput;
