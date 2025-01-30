import Image from 'next/image';
import LogoImage from '../../../public/images/walterai1-removebg-preview.png';

function WalterLogo() {
  return (
    <Image
      src={LogoImage}
      width={50}
      height={50}
      alt="Company Logo"
    />
  );
}

export default WalterLogo;