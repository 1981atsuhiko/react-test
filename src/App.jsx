import React, { useEffect, useState } from "react";
import { ColorMes } from "./componets/ColorMes";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShow = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "blue" }}>表示成功</h1>
      <ColorMes color="green" Size="26px">
        スタイル1
      </ColorMes>
      <ColorMes color="pink" Size="18px">
        スタイル2
      </ColorMes>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShow}>on/off</button>
      <p>{num}</p>
      {faceShow && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
