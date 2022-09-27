import { useState, createContext } from 'react';

const GifContext = createContext();

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  return (
    <GifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifContext.Provider>
  );
}

export default GifContext;
