import * as St from "../animation/Animation.styled";
import vocaloid from "../../api/vocaloid.json";

const Vocaloid = () => {
  return (
    <St.Container>
      <St.Table>
        <St.Tbody>
          {vocaloid.map((item, index) => (
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

export default Vocaloid;
