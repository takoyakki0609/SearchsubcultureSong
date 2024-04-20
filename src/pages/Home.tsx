import { typeState } from "../state/Atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import SearchResult from "./searchResult/SearchResult";

const Home = () => {
  const classification = useRecoilValue(typeState);
  return (
    <Container>
      {classification ? (
        <>
          <SearchResult />
        </>
      ) : (
        <>
          <ul>
            <li>애니메이션, 노래제목 또는 가수명으로 검색해주세요</li>
            <li>
              일부 단어로도 검색이 가능합니다. (ex: 강철의 연금술사 - 강철)
            </li>
            <li>
              검색할 수 있는 카테고리는 애니메이션, 우타이테, 보컬로이드 입니다.
            </li>
          </ul>
        </>
      )}
    </Container>
  );
};

export default Home;

export const Container = styled.section`
  height: 65vh;
  ul {
    margin-top: 4rem;
    font-size: 2rem;
  }
`;
