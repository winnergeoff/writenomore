import Image from 'next/image';
import LogoImage from '../../../public/images/walterai2.png';

function WalterLogo2() {
  return (
    <Image
      src={LogoImage}
      width={50}
      height={50}
      alt="Company Logo"
    />
  );
}

export default WalterLogo2;