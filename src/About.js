import QueryString from "qs";
import React from "react";

const About = ({ location }) => {
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트임</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
