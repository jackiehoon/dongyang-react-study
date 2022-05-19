import { useState } from "react";
import styled from "styled-components";

const ModalName = ({ name, onClose, onSubmit }) => {
  const [text, setText] = useState(name);

  const handleSubmit = () => {
    onSubmit(text);
    onClose();
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <h2>이름 바꾸기</h2>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>확인</button>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
`;

export default ModalName;
