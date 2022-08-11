import "./Style.css";
import React, { useContext } from "react";


export const Title = (props) => {
  return (
    <div>
    

      <div className="col-lg-4 col-md-6 inner-style  ">
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
          <img  src={props.img} className="max-w-xs" alt="Louvre" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out bg-indigo-700"></div>
        </div>
      </div>

      <div style={{marginRight:'42%'}} >
      <div className="text-white">
        <span className="price_title">Form</span>
        <span className="price_value">$120</span>
        <span className="price_unit">/Night</span>
      </div>
      <div className="style-title">
        <h3> {props.title}</h3>
        
        <div>
          <a href>20m2 |</a>

          <a href>Balcony |</a>

          <a href>Lake View</a>
         
        </div>

        <div style={{marginLeft:'23%'}}className="fb-like" data-href="https://developers.facebook.com/docs/pluginns/" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="true"></div>

        </div>
        
      </div>

      
    </div>

    
  );
};
