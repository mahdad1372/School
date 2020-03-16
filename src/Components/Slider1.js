import React, {
    useState,
    useEffect
  } from 'react';
 
  import '../App.css';
  import Slider from "react-slick";
  
  function App() {
     

  
    let settings = {
      infinite: false,
      speed: 1000,
      arrows:true,
      slidesToShow: 3,
      slidesToScroll: 2,
  
      responsive: [
        {
          breakpoint: 960,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 2
          }
      }
    ]
    }
        return (
            <div className="bg-dark">
          <div className="container slidershow">
              <br/><br/><br/><br/>
              <div className="text-center text-white">
                  <h2>جدید ترین کورس های آموزشی</h2>
                  <br/><br/><br/>
              </div>
              
             
                  <Slider {...settings}>
                          <div className="out">
                          <div className="card">
        <img className="card-img-top img-size3" src={require('../img/math.jpg')} alt="Card image cap" />
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex bg-secondary text-white">
          <div class="p-2 mr-auto">ریاضی</div>
  <div class="p-2">45 دقیقه</div>

          </li>
        </ul>
        <div className="card-body">
          <h5>سر فصل دروس ریاضی</h5>
          <p className="card-text">تابع ، مثلثات ، دیفرانسیل، انتگرال ، هندسه تحلیل</p>
        </div>
        <div className="card-body">
          <a className="btn btn-info text-white">ادامه</a>
        </div>
      </div>
                          </div>

                          <div className="out">
                          <div className="card">
        <img className="card-img-top img-size3" src={require('../img/chemistry.jpg')} alt="Card image cap" />
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex bg-secondary text-white">
          <div class="p-2 mr-auto">شیمی</div>
  <div class="p-2">45 دقیقه</div>

          </li>
        </ul>
        <div className="card-body">
          <h5>سر فصل دروس شیمی</h5>
          <p className="card-text">تابع ، مثلثات ، دیفرانسیل، انتگرال ، هندسه تحلیل</p>
        </div>
        <div className="card-body">
          <a className="btn btn-info text-white">ادامه</a>
        </div>
      </div>
                          </div>


                          <div className="out">
                          <div className="card">
        <img className="card-img-top img-size3" src={require('../img/physic.jpg')} alt="Card image cap" />
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex bg-secondary text-white">
          <div class="p-2 mr-auto">فیزیک</div>
  <div class="p-2">45 دقیقه</div>

          </li>
        </ul>
        <div className="card-body">
          <h5>سر فصل دروس فیزیک</h5>
          <p className="card-text">تابع ، مثلثات ، دیفرانسیل، انتگرال ، هندسه تحلیل</p>
        </div>
        <div className="card-body">
          <a className="btn btn-info text-white">ادامه</a>
        </div>
      </div>
                          </div>

                          <div className="out">
                          <div className="card">
        <img className="card-img-top img-size3" src={require('../img/physic.jpg')} alt="Card image cap" />
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex bg-secondary text-white">
          <div class="p-2 mr-auto">فیزیک</div>
  <div class="p-2">45 دقیقه</div>

          </li>
        </ul>
        <div className="card-body">
          <h5>سر فصل دروس فیزیک</h5>
          <p className="card-text">تابع ، مثلثات ، دیفرانسیل، انتگرال ، هندسه تحلیل</p>
        </div>
        <div className="card-body">
          <a className="btn btn-info text-white">ادامه</a>
        </div>
      </div>
                          </div>

                          <div className="out">
                          <div className="card">
        <img className="card-img-top img-size3" src={require('../img/physic.jpg')} alt="Card image cap" />
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex bg-secondary text-white">
          <div class="p-2 mr-auto">فیزیک</div>
  <div class="p-2">45 دقیقه</div>

          </li>
        </ul>
        <div className="card-body">
          <h5>سر فصل دروس فیزیک</h5>
          <p className="card-text">تابع ، مثلثات ، دیفرانسیل، انتگرال ، هندسه تحلیل</p>
        </div>
        <div className="card-body">
          <a className="btn btn-info text-white">ادامه</a>
        </div>
      </div>
                          </div>
                          
                     
                  </Slider>
             
          </div>
          <br/><br/><br/>
          </div>
      );
  }
  
  export default App;