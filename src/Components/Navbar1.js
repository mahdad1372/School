import React from 'react';
import { Navbar , NavDropdown , Nav , Dropdown } from 'react-bootstrap';
import '../App.css';
class Navbar22 extends React.Component {
  render() {
    return (
    <div className="navbar11">
     <Navbar collapseOnSelect expand="lg" className="bg-white" style={{marginBottom:0}}>
  <img src={require('../img/logo1-01-01.png')} alt="Image placeholder" className="logo-img"/>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
    
    <Nav className="ml-auto text-center text-style">
    <Nav.Link className="text-navbar"><a>ارتباط باما</a></Nav.Link>

  
      <div class="dropdown">
  <button class="dropbtn"><a>جزوات آموزشی</a></button>
  <div class="dropdown-content">
  <a>ریاضی</a>
  <a>فیزیک</a>
  <a>شیمی</a>
  <a>زیست شناسی</a>
  <a>ادبیات</a>
  </div>
</div>
      
<div class="dropdown">
  <button class="dropbtn"><a>صفحات</a></button>
  <div class="dropdown-content">
  <a>ثبت نام</a>
  <a>ورود</a>
  <a>همایش ها</a>
  
  </div>
</div>
    <Nav.Link className="text-navbar"><a>تماس با ما</a></Nav.Link>
      <Nav.Link className="text-navbar"><a>صفحه اصلی</a></Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    </div>
    )
  }
}

export default Navbar22;