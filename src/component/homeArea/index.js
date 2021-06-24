import "./index.css";
import React from "react";

function HomeArea() {
  var [text, setText] = React.useState("");
  const consttext = [
    "이 페이지는 React로 만들어졌습니다.",
    "웹 개발자 이웅의 포트폴리오 입니다",
  ];
  var textarrindex = 0;
  var textindex = 0;

  function typing() {
    if (textindex < consttext[textarrindex % consttext.length].length) {
      setText(
        (text += consttext[textarrindex % consttext.length][textindex++])
      );

      setTimeout(typing, 100);
    } else {
      setTimeout(backtyping, 500);
      textarrindex++;
    }
  }
  function backtyping() {
    if (textindex > 0) {
      text = text.slice(0, --textindex);
      setText(text);
      setTimeout(backtyping, 70);
    } else {
      setTimeout(typing, 300);
    }
  }

  React.useEffect(() => {
    typing();
  }, []);

  return (
    <div>
      <div id="home-area">
        <img id="home-img" src="./images/reactImg.png" />
        <div>
          <span id="home-text">{text}</span>
        </div>
      </div>
    </div>
  );
}

export default HomeArea;
