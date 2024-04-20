import * as St from "./Animation.styled";
import { useRecoilValue } from "recoil";
import { searchDataState, searchValueState } from "../../state/Atom";

import SearchResult from "../searchResult/SearchResult";
import AnisongList from "./AnisongList";

const Animation = () => {
  const songData = useRecoilValue(searchDataState);
  const searchValue = useRecoilValue(searchValueState);

  return (
    <St.Container>
      {searchValue ? <SearchResult /> : <AnisongList />}
    </St.Container>
  );
};

export default Animation;
