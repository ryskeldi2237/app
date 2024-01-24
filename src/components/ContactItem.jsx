import React from "react";

function ContactItem() {
  return (
    <div className="main-content">
      <div className="fullwidth-block">
        <div className="container">
          <div className="col-md-5">
            <div className="contact-details">
              <div
                className="map"
                data-latitude="-6.897789"
                data-longitude="107.621735"
              >
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6018.974733381123!2d74.60211265185735!3d42.87678836529177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2z0J_Qu9C-0YnQsNC00Ywg0JDQu9CwLdCi0L7Qvg!5e0!3m2!1sru!2skg!4v1628851440499!5m2!1sru!2skg"
                  className="maping"
                /> */}
              </div>
              <div className="contact-info">
                <div>
                  <img src="assets/images/icon-marker.png" alt="img"></img>
                  <p>
                    Vertex <br></br>
                    Bishkek
                  </p>
                </div>
                <div>
                  <div>
                    <img src="assets/images/icon-phone.png" alt="logo"></img>
                    +996553338878
                  </div>
                  <div>
                    <img src="assets/images/icon-envelope.png" alt="logo"></img>
                    ryskeldi2237@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-md-offset-1">
            <h2 className="section-title">Contact us</h2>
            <p>Fill in the field, after sending, check the mail, spam</p>
            <form action="#" className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder="Your name..."></input>
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Email Addresss..."></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" placeholder="Company name..."></input>
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Website..."></input>
                </div>
              </div>
              <textarea name="" placeholder="Message..."></textarea>
              <div className="text-right">
                <input type="submit" placeholder="Send message"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
