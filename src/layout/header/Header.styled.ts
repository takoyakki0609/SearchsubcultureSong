import styled from "styled-components";

export const Container = styled.article``;
export const TitleWrapper = styled.div`
  margin-top: 5rem;
  text-align: center;
`;
export const TItle = styled.h1`
  font-size: 3rem;
`;

/* navBar style */
export const DataWrapper = styled.ul`
  font-size: 2rem;

  margin-top: 10rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
`;
export const DataTitle = styled.li`
  &:hover {
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
  }
`;
/* searchInput style*/
export const SearchWrapper = styled.form`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;
export const SearchArea = styled.input`
  width: 30%;
  height: 4rem;
`;
export const SearchBtn = styled.button`
  margin-left: 2rem;
  padding: 1rem 2rem;
`;

export const ButtonWrapper = styled.article``;
export const SelecButton = styled.button``;
