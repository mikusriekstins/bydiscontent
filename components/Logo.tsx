import Image from 'next/image'

import style from '@/styles/Logo.module.scss'
import logoSVG from '../public/discontent-logo.svg'

const Logo = () => {
  return (
    <a className={ style.logo } href="/">
      <Image src={ logoSVG } alt="Discontent"/>
    </a>
  );
};

export default Logo;
