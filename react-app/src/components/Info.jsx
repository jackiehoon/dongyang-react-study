import { useEffect } from "react";
import useInputs from "../hooks/useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
    nickname2: "",
  });
  const { name, nickname, nickname2 } = state;

  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
        <input name="nickname2" value={nickname2} onChange={onChange} />
      </div>
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickname}</h1>
    </>
  );
};

export default Info;
