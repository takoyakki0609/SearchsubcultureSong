import { useRecoilValue } from "recoil";
import { searchDataState } from "../state/Atom";
import SearchResult from "./searchResult/SearchResult";

const Home = () => {
  const songData = useRecoilValue(searchDataState);
  return (
    <>
      {songData ? (
        <>
          <SearchResult />
        </>
      ) : (
        <>검색결과가 없습니다.</>
      )}
    </>
  );
};

export default Home;
