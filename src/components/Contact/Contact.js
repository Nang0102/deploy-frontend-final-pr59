import "./Contact.css";

export const Contact = () => {
  return (
    <div>
      <div>
        <div
          className="content-rooms"
          style={{
            backgroundImage:
              "url('https://erios.webhotel.vn/images/Contact.jpg')",
          }}
        >
          <p className="text-rooms">Contact</p>
        </div>
        {/* <p>Địa chỉ chúng tôi</p>
        <b>4th Floor, 147 Mai Dich Street, Cau Giay District, Hanoi</b>
        <br />
        <br /> */}
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8236793395135!2d105.774373!3d21.0397399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c9bc0a304f%3A0xcf7e439a69beb3de!2zNDcgUC4gTWFpIEThu4tjaCwgTWFpIEThu4tjaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1659111791611!5m2!1svi!2s"
          style={{
            width: "100%",
            height: 500,
            frameBorder: "0",
            border: "0",
            allowfullScreen: "",
          }}
        ></iframe>

        {/*src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.615593436863!2d106.65415201477133!3d10.76408024232994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec7752c743%3A0xd832d71bd12b6a15!2zRmxlbWluZ3RvbiBUb3dlciwgMTgyIEzDqiDEkOG6oWkgSMOgbmgsIHBoxrDhu51uZyAxNSwgUXXhuq1uIDExLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1521530731757"  */}
        <br />
        <p>Email chúng tôi</p>
        <b>INFO@WEBHOTEL.VN</b>
        <br />
        <p>Điện thoại</p>
        <b>0242 242 0777</b>
        <br />
        <br />
        <br />
        <h2>
          <b id="ques">Gửi thắc mắc cho chúng tôi</b>
        </h2>
        <div id="hr"></div>
        <br />
        <div>
          <input id="name" type="text" placeholder="Tên của bạn" />
        </div>
        <br />
        <div>
          <input id="email" type="text" placeholder="Email của bạn" />
          <input id="number" type="tel" placeholder="Số điện thoại của bạn" />
        </div>
        <br />
        <div>
          <textarea
            id="content"
            rows="6"
            cols="83"
            placeholder="Nội dung..."
          ></textarea>
        </div>
        <br />
        <div id="policies">
          <p>
            This site is protected by reCAPTCHA and the Google
            <a className="google" href="https://policies.google.com/privacy">
              Privacy Policy
            </a>
            and
            <a className="google" href="https://policies.google.com/terms">
              Terms of Service
            </a>
            apply.
          </p>
        </div>
        <button className="btn">
          <b>GỬI CHO CHÚNG TÔI</b>
        </button>
      </div>
    </div>
  );
};
