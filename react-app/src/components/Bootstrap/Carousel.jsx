import styled from "styled-components";

const Carousel = ({ data }) => {
  return (
    <Container>
      <List>
        {data.map(({ id, image }) => (
          <Image key={id} src={image} />
        ))}
      </List>
      <BtnPrev>이전</BtnPrev>
      <BtnNext>다음</BtnNext>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
const List = styled.div``;
const Image = styled.img`
  position: absolute;
  width: 800px;
  height: 600px;
`;
const BtnPrev = styled.button``;
const BtnNext = styled.button``;

export default Carousel;
