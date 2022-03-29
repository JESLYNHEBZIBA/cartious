import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>DO you need more tips?</h2>
              <p>Sign up free and get the latest tips.</p>
              <form className="form-section">
                <input placeholder="vishnusreedhar2001@gmail.com" name="email" type="email" />
                <input value="Yes. I want!" name="subscribe" type="submit" style={{"color":'#000'}} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
