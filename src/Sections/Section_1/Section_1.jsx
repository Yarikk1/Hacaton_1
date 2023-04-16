import React from 'react';
import './Section_1.css';
import Left_block_section_1 from './Left_block_section_1/Left_block_section_1';
import Right_block_section_1 from './Right_block_section_1/Right_block_section_1';

function Section_1() {
  return (
    <div className="Section_1">
      <div className='Left_and_right_block_section_1'>
      <Left_block_section_1 />
      <Right_block_section_1 />
      </div>
    </div>
  );
}

export default Section_1;
