import { useEffect, useState } from 'react';

function HeroSectionLeftText() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply on small screens
      if (window.innerWidth <= 768) {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight * 2; // 300vh
        setVisible(scrollY < maxScroll);
      } else {
        setVisible(true); // always visible on desktop
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // re-check on resize
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className='fixed -left-[17em] md:left-[-190px] text-[13px] top-1/2 z-50 '>
      <div className="-rotate-90 text-white/70">
        <span className="hover:text-amber-500 mr-10">DEVELOPMENT</span>
        <span className="hover:text-amber-500 mr-10">GRAPHIC DESIGNING</span>
        <span className="hover:text-amber-500 mr-10 uppercase">UI/UX Designing</span>
      </div>
    </div>
  );
}

export default HeroSectionLeftText;
