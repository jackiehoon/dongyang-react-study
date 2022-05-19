import { useState } from "react";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";

import { accordionData, carouselData } from "../../datas/bootstrap";
import ModalName from "./ModalName";

const Bootstrap = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [name, setName] = useState("홍길동");

  return (
    <>
      <Accordion data={accordionData} />
      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      <div>{isShowDropdown && <Dropdown />}</div>
      <Carousel data={carouselData} />

      <h1>이름 : {name}</h1>
      <button onClick={() => setIsShowModalName(true)}>이름바꾸기</button>
      {isShowModalName && (
        <ModalName
          onClose={() => setIsShowModalName(false)}
          name={name}
          onSubmit={(val) => setName(val)}
        />
      )}
    </>
  );
};

export default Bootstrap;
