import { useEffect, useState, useRef } from 'react';

/* once, es un indicador para desconectar eln observer o seguir escuchando */
//external ref es para mardarle una referencia externa
export default function useNearScreen({
  distancia = '100px',
  externalRef,
  once = true,
} = {}) {
  //from ref es una para devolver el useref
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        // console.log(el.isIntersecting);
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    Promise.resolve(IntersectionObserver).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distancia,
      });

      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });
  return { isNearScreen, fromRef };
}
