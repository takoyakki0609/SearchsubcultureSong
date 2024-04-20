import { useRecoilValue } from "recoil";
import { typeState, searchValueState } from "../../state/Atom";

const Info = () => {
  const classification = useRecoilValue(typeState);
  const searchValue = useRecoilValue(searchValueState);

  return (
    <div>
      <>현재 선택된 노래방 기기는 {classification} 입니다. </>
      {searchValue ? (
        <>
          <>{searchValue}로 검색한 결과입니다.</>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Info;
