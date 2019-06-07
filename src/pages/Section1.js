import React from "react";

class Section1 extends React.Component {
    render() {
      return (
          <React.Fragment>
            <h1 className="MainTitle white">안녕하세요 새봄입니다. 여기에 제목을 써주세요.</h1>
            <p className="MainTitle white">{"여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n"}</p>
            <div class="BackgroundVideo">
                <video id="myVideo"
                    muted="true" autoPlay="true" loop="true" preload="auto" playsInline="true" poster={require("../assets/video/videodummy.jpg")}>
                    <source src={require('../assets/video/myVideo.mp4')} type="video/mp4"></source>
                </video>
            </div>
          </React.Fragment>

      );
    }
  }

  export default Section1;