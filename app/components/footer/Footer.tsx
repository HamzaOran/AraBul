import Link from 'next/link';
import Container from '../Container';
import FooterList from './FooterList';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-white text-green-900 text-sm mt-2">
      <Container>
        <div className="grid gap-2 grid-cols-3 pt-2 pb-2 ">
          <div className="w-full md:w-1/2 m-4 p-4">
            <h6 className="text-teal-950 text-2xl font-bold mb-4">
              <a href="/">AraBul</a>
            </h6>
            <p className="mb-2">
              Artık yalnız değilsiniz. Kaybettiğiniz ne ise biz bulacağız.
              Takipte kalın
            </p>

            <div>
              <h6 className="text-base font-bold  mb-2">Sosyal Medya</h6>
              <div className="flex gap-2 text-green-900">
                <Link href="https://www.linkedin.com/in/hamza-oran-0b5457b4/">
                  <BsLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full"></div>
          <div className="flex flex-cols-2 m-4 p-4 justify-end">
            <FooterList>
              <h6 className="text-base font-bold mb-2">LoremA</h6>
              <Link href="#">Lorem1</Link>
              <Link href="#">Lorem1</Link>
              <Link href="#">Lorem1</Link>
              <Link href="#">Lorem1</Link>
            </FooterList>
            <FooterList>
              <h6 className="text-base font-bold mb-2">LoremB</h6>
              <Link href="#">Lorem1</Link>
              <Link href="#">Lorem1</Link>
              <Link href="#">Lorem1</Link>
              <Link href="#">Lorem1</Link>
            </FooterList>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
