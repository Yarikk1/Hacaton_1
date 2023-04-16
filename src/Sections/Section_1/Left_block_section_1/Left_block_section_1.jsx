import React from 'react';
import "./Left_block_section_1.css";
import Irina_section_1 from "../../../Images/Irina_section_1.png";
import { ReactComponent as Vk } from "../../../Icons/Vk.svg";
import { ReactComponent as Be } from "../../../Icons/Be.svg";
import { ReactComponent as Telegram } from "../../../Icons/Telegram.svg";
import { ReactComponent as Whatsap } from "../../../Icons/Whatsap.svg";

function Left_block_section_1() {
  return (
    <div className="Left_block_section_1">
      <div className="Ira_foto_section_1">
      <img className="Irina_section_1" src={Irina_section_1}></img>
      </div>
      <div className="Subblock_Irina_section_1">
        <div className="Icons_portfolio_section_1">
        <div className="Icons_left_block_section_1">
          <Vk />
          <Be />
          <Telegram />
          <Whatsap />
        </div>
        <div className="Portfolio_section_1">
          <div className="Subblock_portfolio_section_1">Портфолио</div>
        </div>
        </div>
        <div className="Subblock__2_Irina_section_1">
        <div className="HardSkills_section_1">
        <div className="Subblock_skills_section_1">Hard Skills</div>
        <div className='EducationOther_section_1'>
        <div className="Education_section_1">
          <div className="YarGU_section_1">ЯрГУ им. П.Г. Демидова</div>
          <div className="YGPU_section_1">ЯГПУ им. К.Д.Ушинского</div>
        </div>
        <div className="Other_section_1">
          <div className="Language_section_1">Английский язык - В2</div>
          <div className="Microsoft_section_1">Microsoft Project</div>
        </div>
        </div>
        <div className="SoftSkills_section_1">
          <div className="Subblock_soft_section_1">
            Soft Skills
          </div>
        </div>
        <div className="Tests_section_1">
          <div className="Balbin_section_1">Тест Белбина</div>
          <div className="Personality_section_1">Тип личности</div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Left_block_section_1;
