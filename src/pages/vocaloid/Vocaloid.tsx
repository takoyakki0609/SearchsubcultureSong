import * as St from "../animation/Animation.styled";
import { searchValueState } from "../../state/Atom";
import { useRecoilValue } from "recoil";
import SearchResult from "../searchResult/SearchResult";

import VocaloidList from "./VocaloidList";

const Vocaloid = () => {
  const searchValue = useRecoilValue(searchValueState);
  return (
    <St.Container>
      {searchValue ? (
        <>
          <SearchResult />
        </>
      ) : (
        <VocaloidList />
      )}
    </St.Container>
  );
};

export default Vocaloid;
