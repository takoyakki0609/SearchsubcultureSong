import * as St from "./Animation.styled";
import anisong from "../../api/animation.json";

const Animation = () => {
  return (
    <St.Container>
      <St.Table>
        <St.Tbody>
          {anisong.map((item, index) => (
            <St.Tr key={index}>
              <St.Td>{item[0]}</St.Td>
              <St.Td>{item[1]}</St.Td>
              <St.Td>{item[2]}</St.Td>
              <St.Td>{item[3]}</St.Td>
            </St.Tr>
          ))}
        </St.Tbody>
      </St.Table>
    </St.Container>
  );
};

export default Animation;
