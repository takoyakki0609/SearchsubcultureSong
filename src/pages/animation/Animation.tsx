import * as St from "./Animation.styled";
import { useRecoilValue } from "recoil";
import { typeState, searchDataState } from "../../state/Atom";
import anisong from "../../api/animation.json";
import SearchResult from "../searchResult/SearchResult";

const Animation = () => {
  const classification = useRecoilValue(typeState);
  const songData = useRecoilValue(searchDataState);

  return (
    <St.Container>
      {songData ? (
        <>
          <SearchResult />
        </>
      ) : (
        <>
          <St.Table>
            <St.Tbody>
              {anisong.map((item, index) => (
                <St.Tr key={index}>
                  <St.Td>{classification === "태진" ? item[0] : item[1]}</St.Td>

                  <St.Td>{item[2]}</St.Td>
                  <St.Td>{item[3]}</St.Td>
                </St.Tr>
              ))}
            </St.Tbody>
          </St.Table>
        </>
      )}
    </St.Container>
  );
};

export default Animation;
