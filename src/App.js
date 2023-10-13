import React from 'react';
import Header from './component/header';
import Collection from './component/collection';
import Testimonial from './component/testimonial';
import Shop from './component/shop';
import Footer from './component/footer';
import Featured from './component/featured';
import Text from './component/text';

export default class app extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Collection/>
        <Featured/>
        <Text/>
        <Testimonial/>
        <Shop/>
        <Footer/>
      </>
    )
  }
}