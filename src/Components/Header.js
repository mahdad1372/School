import React from 'react';
import { Carousel , NavDropdown , Nav } from 'react-bootstrap';
import '../App.css';
class Header extends React.Component {
  render() {
    return (
    <div className="slider">
        <Carousel>
  <Carousel.Item>
    <img
      className="img-size"
      src={require('../img/students2.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
        <div className="text-style1">
        <a>برگزاری آزمون های آنلاین</a><br/>
        <a>هر هفته به صورت منظم</a>
        </div>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-size"
      src={require('../img/parent.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="text-style1">
        <a>جلسات مرتب با اولیا</a><br/>
        <a>و دبیران</a>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-size"
      src={require('../img/exam.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="text-style1">
        <a>برگزاری آزمون های کتبی</a><br/>
        <a>و کنکور های آزمایشی در  آخر هر هفته</a>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    )
  }
}

export default Header;