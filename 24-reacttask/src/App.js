import React, { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  const [content, inputContent] = useState('');
  const [img, setImg] = useState('banana.png');
  const [bColor, setBColor] = useState('pink');
  const [color, setColor] = useState('yellow');
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select setImg={setImg} setBColor={setBColor} setColor={setColor} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input inputContent={inputContent} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result content={content} img={img} bColor={bColor} color={color} />
      </div>
    </>
  );
}

export default App;
