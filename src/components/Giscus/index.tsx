import React, { useRef } from 'react';
import { useEffect } from 'react';

import { getLocalstorageTheme } from '../ThemeToggle';

const Giscus = () => {
  const giscusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const theme = getLocalstorageTheme();

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'KJWHUB/kwonjungwoon-blog');
    script.setAttribute('data-repo-id', 'R_kgDOLV2B9w');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOLV2B984Cd_S8');
    script.setAttribute('data-mapping', 'pathname');

    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', theme === 'dark' ? 'dark_dimmed' : 'light_protanopia');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    if (giscusRef.current) {
      giscusRef.current.appendChild(script);
    }
  }, []);

  return (
    <div id='giscus-box' style={{ margin: '40px 0' }}>
      <div ref={giscusRef} />
    </div>
  );
};

export default Giscus;
