import React from "react";
import "./Right_block_section_1.css";
import Keys_1 from "../../../Images/Keys_1.png"
import Keys_2 from "../../../Images/Keys_2.png"

function Right_block_section_1() {
  return (
    <div className="Right_block_section_1">
      <div className="All_bloks_section_1">
        <div className="Name_section_1">Ирина Смирнова</div>
        <div className="Disigned_section_1">Дизайнер</div>
        <div className="AboutMe_section_1">
          Как дизайнер с опытом работы в индустрии более чем 5 лет, я имею
          уникальный набор навыков и знаний, которые позволяют мне создавать
          эффективные и привлекательные дизайн-решения. Моя специализация
          включает в себя графический дизайн, веб-дизайн и UX/UI-дизайн, что
          позволяет мне работать в широком спектре проектов.
        </div>
        <div className="Keys_section_1">Кейсы</div>
      </div>
      <div className="Keyses_section_1">
        <div><img className="Keys_1" src={Keys_1}></img></div>
        <div><img className="Keys_2" src={Keys_2}></img></div>
      </div>
    </div>
  );
}

export default Right_block_section_1;
