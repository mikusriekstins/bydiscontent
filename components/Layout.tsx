
import Header from './header'
import Footer from './Footer'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header/>
      <main>{ children }</main>
      <Footer/>
    </>
  )
};

export default Layout;
