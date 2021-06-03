import React, { useEffect } from 'react';

/*
* Returns Portal Element Created
*
* @param {string} id - Will be the Id for the created HTML Element
* @return {HTMLDivElement} - Html element created for the portal
*/
export function usePortal(id: string) {
  const rootElRef = React.useRef(document.createElement('div'));

  useEffect(() => {
    const rootRefCopy = rootElRef.current;
    const parentEl = document.querySelector(`#${id}`);

    if (parentEl) parentEl.appendChild(rootElRef.current);

    return () => {
      rootRefCopy.remove();
    };
  }, [id]);

  return rootElRef.current;
}
