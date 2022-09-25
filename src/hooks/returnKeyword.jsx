import { useState } from 'react';

function returnKeyword() {
  const [data, setdata] = useState('');

  const retornar = dato => {
    console.log(dato);
    setdata(dato);
  };
  return { data, retornar };
}

export default returnKeyword;
