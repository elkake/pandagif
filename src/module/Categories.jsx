import { Link } from 'react-router-dom';
import './Categories.css';
function Categories({ options }) {
  return (
    <ul className='ct_container'>
        {options.map(nombre => (
          <li className='ct_links' key={nombre}>
            <Link className='ct_link' to={`/search/${nombre}`}>Gifs de {nombre}</Link>
          </li>
        ))}
    </ul>
  );
}

export default Categories;
