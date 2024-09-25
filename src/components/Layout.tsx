import { FC, PropsWithChildren } from 'react';

import Header from './Header/Header';
import { Container } from './Container';
// import Footer from './Footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container className=''>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
