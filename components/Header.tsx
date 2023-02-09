import Logo from './Logo'
import Button from './Button'
import { Grid, Col } from './Grid'

import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={ styles.header }>
      <div className="container">
        <Grid alignItems="center" expanded justifyItems="space-between">
          <Col xl="4" md="6" sm="12">
            <Logo />
          </Col>
          <Col style={{ textAlign: "right" }} xl="4" md="6" sm="12">
            <div>
              <Button url="/">Get in touch</Button>
            </div>
          </Col>
        </Grid>
      </div>
    </header>
  )
};

export default Header;
