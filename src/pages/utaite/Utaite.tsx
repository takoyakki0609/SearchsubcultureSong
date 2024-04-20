import * as St from "../animation/Animation.styled";

import { useRecoilValue } from "recoil";
import { searchValueState } from "../../state/Atom";
import SearchResult from "../searchResult/SearchResult";
import UtaiteList from "./UtaiteList";

const Utaite = () => {
  const searchValue = useRecoilValue(searchValueState);

  return (
    <St.Container>
      {searchValue ? (
        <>
          <SearchResult />
        </>
      ) : (
        <UtaiteList />
      )}
    </St.Container>
  );
};

export default Utaite;
