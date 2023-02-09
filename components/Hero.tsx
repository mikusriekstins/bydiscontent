import style from '../styles/Hero.module.scss'

import { Col, Grid } from './Grid';

const Hero = (props: any) => {
  return (
    <section className={ style.hero }>
      <div className="container">
        <Grid>
          <Col xl="6" md="6" sm="12">
            { props.children }
          </Col>
        </Grid>
      </div>
    </section>
  );
};

export default Hero;
