import React from "react";
import Title from "./Title";
import TitleQ1 from "./TitleQ1";
import Range from "./Range";
import TitleQ2 from "./TitleQ2";
import InputP from "./InputP";
const Quiz = () => {
  return (
    <div className="quiz-container">
      <Title/>
      <TitleQ1/>
      <Range/>
      <TitleQ2/>
      <InputP/>
    </div>
  );
};
export default Quiz;
