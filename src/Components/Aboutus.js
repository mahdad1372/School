import React from 'react';
import '../App.css';
const Aboutus = () => {
  return (
      <div className="container aboutus">
           <div className="row">
               <div className="col-lg-6 col-md-12 col-sm-12">
                   <div className="d-flex justify-content-center">
                       <img src={require('../img/school2.jpg')} className="img-size1"/>
                   </div>
               </div>
               <div className="col-lg-6 col-md-12 col-sm-12">
               <div className="d-flex justify-content-end">
                   <div className="text-right">
                   <h2>درباره ما</h2><br/>
                   <a>موسسه آموزشی ما از سال 1385 شروع به کار کرده است و  در حال حاضر یکی از معتبرتیرن و موفت ترین موسسه های آموزشی در کشور می باشد به طوری که دانش آموزان بسیار موفقی در زمینه علمی و پژوهشی و ادبی آتربیت کرده است</a>
                   
                   </div>
                   </div>
               </div>

           </div>
      </div>
  );
}

export default Aboutus;