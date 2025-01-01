import React, { useEffect } from 'react';

const FacebookLogin = () => {
  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: '1075064627580974', // Replace with your Facebook App ID
          cookie: true,
          xfbml: true,
          version: 'v18.0'
        });

        // Check login status
        window.FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            console.log('Logged in and authorized');
            getUserData();
          } else {
            console.log('Not logged in or not authorized');
          }
        });
      };

      // Load the SDK
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []); // Empty dependency array means this runs once on mount

  // Function to get user data
  const getUserData = () => {
    window.FB.api('/me', { fields: 'name,email' }, function(response) {
      console.log('User data:', response);
      // Handle the user data here
      // You might want to send this to your server
    });
  };

  // Login state handler
  const checkLoginState = () => {
    window.FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        getUserData();
      }
    });
  };

  return (
    <div className="facebook-login-container">
      <div id="fb-root"></div>
      <div 
        className="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="continue_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
        data-onlogin="checkLoginState"
      ></div>
    </div>
  );
};

export default FacebookLogin;
