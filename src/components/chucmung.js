import React from "react";
import "./chucmung.css";
const logo  = require('./khanh.png');

function Modal({closemodal}) {
    return <div className="modalBackground">
        <div className="modalContainer">
            <div>
            <img src={logo} />
            </div>
            <div>
            <button className={"nut"} onClick={() => closemodal(false)}> X </button>
            </div>
                
            {/* <div className="tittle">
            <h1> CẢM ƠN BẠN ĐÃ ĐẶT PHÒNG</h1>
            </div>
            <div className="body"></div>
            <p> chúc bạn có một ngày tốt lành</p>
            <div className="footer">
                <button>Xem lại hóa đơn</button>
            </div> */}

        </div>
    </div>
}

export default Modal;

