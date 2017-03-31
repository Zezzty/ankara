import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const AboutUs = ({handleOnClick}) => {
  const textStyle = {
    margin: '5px 5px 5px 5px',
    fontSize: '16px',
    textAlign: 'center',
    color: 'black'
  };

  const headerStyle = {
    margin: '0px',
    padding: '5px 0px 5px 0px'
  };

  const backStyle = {
    margin: '0px',
    padding: '5px 0px 5px 0px',
    borderTop: '1px solid darkslategrey',
    borderBottom: 'none'
  };

  return (
    <ReactCSSTransitionGroup
      transitionName="menu-anim"
      transitionEnter={false}
      transitionLeave={false}
      transitionAppear={true}
      transitionAppearTimeout={300}
    >
      <div className="menu-items-container">
        <div className="menu-items" style={headerStyle}>
          <text className="menu-text">The Creators</text>
        </div>
        <div className="menu-item-info">
          <text style={textStyle}>Our team consists of Maria Xia, Sokmean Nou, Jaekwang Seo, and Daniel Park.</text>
          <text style={textStyle}>You can visit our Linkedin profiles below:</text>
          <div className="linked-in-profiles">
            <a href="https://www.linkedin.com/in/maria-xia-2444b472/" className="linked-in-text">
              <img src="images/linkedin-logo.png" style={{width: '18px'}} />
              <text style={textStyle}>Maria Xia</text>
            </a>
          </div>
          <div className="linked-in-profiles">
            <a href="https://www.linkedin.com/in/sokmean/" className="linked-in-text">
              <img src="images/linkedin-logo.png" style={{width: '18px'}} />
              <text style={textStyle}>Sokmean Nou</text>
            </a>
          </div>
          <div className="linked-in-profiles">
            <a href="https://www.linkedin.com/in/jaekwang-seo-53351332/" className="linked-in-text">
              <img src="images/linkedin-logo.png" style={{width: '18px'}} />
              <text style={textStyle}>Jaekwang Seo</text>
            </a>
          </div>
          <div className="linked-in-profiles">
            <a href="https://www.linkedin.com/in/danparkk" className="linked-in-text">
              <img src="images/linkedin-logo.png" style={{width: '18px'}} />
              <text style={textStyle}>Daniel Park</text>
            </a>
          </div>
        </div>
        <div className="menu-items" style={backStyle}>
          <text onClick={() => {handleOnClick()}} className="menu-text">Go Back</text>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default AboutUs;
