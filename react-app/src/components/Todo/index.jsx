import { useState, useRef } from "react";
import styled from "styled-components";

import Item from "./Item";

const Todo = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const nextId = useRef(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 텍스트를 리스트에 추가하는 코드
    const nextList = [...list, { id: nextId.current, text }];
    setList(nextList);
    setText("");
    nextId.current++;
  };
  const handleDelete = (id) => {
    const nextList = list.filter((item) => item.id !== id);
    setList(nextList);
  };
  return (
    <Layout>
      <Container>
        <Title>일정 관리</Title>
        <Form onSubmit={handleSubmit}>
          <InputText onChange={(e) => setText(e.target.value)} value={text} />
          <BtnSubmit>추가</BtnSubmit>
        </Form>
        <Body>
          <List>
            {list.map((item, i) => (
              <Item data={item} onDelete={handleDelete} />
            ))}
          </List>
        </Body>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 400px;
`;
const Title = styled.div`
  background: #22b8cf;
  text-align: center;
  color: #fff;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button``;

const Body = styled.div`
  background: #fff;
  min-height: 300px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default Todo;
