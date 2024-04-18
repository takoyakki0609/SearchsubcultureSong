import { useState } from "react";
import * as St from "./Header.styled";
import anisong from "../../api/animation.json";
import utaite from "../../api/utaite.json";
import vocaloid from "../../api/vocaloid.json";
import { useRecoilState } from "recoil";
import { searchDataState } from "../../state/Atom";
import { SongData } from "../../types/types";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useRecoilState<SongData[]>(searchDataState);

  const searchData = (data: SongData[]): SongData[] => {
    return data.filter((item) =>
      item.some((info) => info.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };
  console.log(results);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allData = [anisong, utaite, vocaloid];
    const foundItems = allData.map((data) => searchData(data)).flat();
    setResults(foundItems);
  };

  return (
    <>
      <St.SearchWrapper onSubmit={handleSearch}>
        <St.SearchArea
          placeholder="노래제목 또는 가수명으로 검색이 가능합니다"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></St.SearchArea>

        <St.SearchBtn type="submit">검색</St.SearchBtn>
      </St.SearchWrapper>
    </>
  );
};

export default SearchInput;
