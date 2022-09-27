import { Link } from 'react-router-dom';

function Categories({ name, options }) {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        {options.map(nombre => (
          <li key={nombre}>
            <Link to={`/search/${nombre}`}>Gifs de {nombre}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Categories;
