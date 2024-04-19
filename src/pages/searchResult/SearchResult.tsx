import { useRecoilValue } from "recoil";
import { searchDataState, typeState } from "../../state/Atom";

import * as St from "./SearchResult.styled";

const SearchResult = () => {
  const songData = useRecoilValue(searchDataState);
  const classification = useRecoilValue(typeState);

  return (
    <St.Container>
      <St.Tbody>
        {songData.map((item, index) => (
          <St.Tr key={index}>
            <St.Td>{classification === "태진" ? item[0] : item[1]}</St.Td>

            <St.Td>{item[2]}</St.Td>
            <St.Td>{item[3]}</St.Td>
          </St.Tr>
        ))}
      </St.Tbody>
    </St.Container>
  );
};

export default SearchResult;
