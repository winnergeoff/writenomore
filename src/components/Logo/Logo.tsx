import Image from 'next/image';
import LogoImage from '../../../public/images/boating-logo.png';

function Logo() {
  return (
    <Image
      src={LogoImage}
      width={50}
      height={50}
      alt="Company Logo"
    />
  );
}

export default Logo;