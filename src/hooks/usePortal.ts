import React, { useEffect } from 'react';

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
