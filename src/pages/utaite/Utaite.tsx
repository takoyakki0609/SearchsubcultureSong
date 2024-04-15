import * as St from "../animation/Animation.styled";
import utaite from "../../api/utaite.json";

const Utaite = () => {
  return (
    <St.Container>
      <St.Table>
        <St.Tbody>
          {utaite.map((item, index) => (
            <St.Tr key={index}>
              <St.Td>{item[0]}</St.Td>
              <St.Td>{item[1]}</St.Td>
              <St.Td>{item[2]}</St.Td>
              <St.Td>{item[3]}</St.Td>
              <St.Td>{item[4]}</St.Td>
            </St.Tr>
          ))}
        </St.Tbody>
      </St.Table>
    </St.Container>
  );
};

export default Utaite;
