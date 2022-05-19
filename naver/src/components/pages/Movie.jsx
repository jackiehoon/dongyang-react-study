import styled from "styled-components";

const Movie = () => {
  return (
    <>
      <h1>영화</h1>
      <Form>
        <InputText />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <List>
        <Item>
          <Thumbnail src="https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg" />
          <Title>영화제목1</Title>
        </Item>
        <Item>
          <Thumbnail src="https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg" />
          <Title>영화제목2</Title>
        </Item>
        <Item>
          <Thumbnail src="https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg" />
          <Title>영화제목3</Title>
        </Item>
      </List>
    </>
  );
};

const Form = styled.form`
  display: flex;
  padding: 20px;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSubmit = styled.button`
  margin-left: 10px;
`;

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.li``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default Movie;
