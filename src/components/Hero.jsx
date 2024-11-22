import React from 'react';
import "../styles/Hero.css";
/* import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
 */
const Hero = () => {
  return <section className='hero-bg'>
  <h1>Лушчие проекты <br/> начни с Leko </h1>
  <h2> Большинство сайтов работают на 100% и приносят <br/> радость и прибыль клиентам</h2>
  <a href="contacts.html"><button >Связаться с нами</button></a>
</section>;

/*     <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </Router> */
};

export default Hero;