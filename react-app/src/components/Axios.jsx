import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    //   IIFE
    (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      setData(response.data);
    })();
  }, []);

  const onClick = () => {};
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default Axios;
