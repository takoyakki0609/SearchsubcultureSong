import { useState } from "react";
import * as St from "./Header.styled";
import anisong from "../../api/animation.json";
import utaite from "../../api/utaite.json";
import vocaloid from "../../api/vocaloid.json";

type SongData = string[];

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<SongData[]>([]); // 빈 배열의 타입을 SongData[]로 명시적 지정

  const searchData = (data: SongData[]): SongData[] => {
    return data.filter((item: SongData) =>
      item.some((info: string) =>
        info.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    const allData = [anisong, utaite, vocaloid]; // 타입 추론을 사용
    const foundItems = allData
      .map((data: SongData[]) => searchData(data))
      .flat();
    setResults(foundItems);
  };

  console.log(results);

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
      {results.length > 0 && (
        <ul>
          {results.map((item, index) => (
            <li key={index}>{item.join(", ")}</li> // 각 결과를 쉼표로 구분하여 표시
          ))}
        </ul>
      )}
      {results.length === 0 && searchTerm && <p>검색 결과가 없습니다.</p>}
    </>
  );
};

export default SearchInput;
