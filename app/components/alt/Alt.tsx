import Link from 'next/link';
import FooterList from '../footer/FooterList';
import Container from '../Container';

const Alt = () => {
  return (
    <Container>
      <div className="grid gap-2 grid-cols-2 justify-around pt-2 pb-2">
        <p>&copy; {new Date().getFullYear()} OranCO. Tüm hakları saklıdır</p>

        <div className="flex flex-column ">
          <p className="px-4">Yardım Merkezi</p>
          <p>Hizmet Şartları</p>
        </div>
      </div>
    </Container>
  );
};

export default Alt;
