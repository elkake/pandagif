import { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(keyword);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        minLength="1"
        autoComplete="off"
        type="text"
        placeholder="ingrese un dato"
        onChange={handleChange}
      />
      <button>Buscar</button>
    </form>
  );
}

export default SearchForm;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// function SearchForm() {
//   const [keyword, setKeyword] = useState('');
//   const navegar = useNavigate();

//   const handleSubmit = e => {
//     e.preventDefault();
//     navegar(`/search/${keyword}`);
//   };

//   const handleChange = e => {
//     setKeyword(e.target.value);
//   };
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input
//         minLength="1"
//         autoComplete="off"
//         type="text"
//         placeholder="ingrese un dato"
//         onChange={handleChange}
//       />
//       <button>Buscar</button>
//     </form>
//   );
// }

// export default SearchForm;
