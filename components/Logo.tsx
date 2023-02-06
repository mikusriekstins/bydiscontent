import Image from 'next/image'

import logoSVG from '../public/discontent-logo.svg'

const Logo = () => {
  return (
    <a className="logo" href="/">
      <Image src={ logoSVG } alt="Discontent"/>
    </a>
  );
};

export default Logo;
