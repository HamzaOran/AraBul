import Link from 'next/link';
import Container from '../Container';
import { Kdam_Thmor_Pro } from 'next/font/google';

const thmor = Kdam_Thmor_Pro({ subsets: ['latin'], weight: ['400'] });

const Navbar = () => {
  return (
    <div
      className="
      sticky
      top-0
      w-full
      z-30
      bg-white
      shadow-sm
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          items-center
          justify-between
          gap-3
          md-gap-0
          "
          >
            <Link href="/" className={`${thmor.className} font-bold text-6xl`}>
              AraBul
            </Link>
            <div className="hidden md:block text-3xl">Kayıp Ara</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Hesabım</div>
              <div>Yardım</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
