"use client";

import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

// Facebook App configuration
const FB_APP_ID = '1075064627580974'; // Replace with your Facebook App ID
const FB_SDK_VERSION = 'v18.0';   // Use the latest stable version

const FacebookLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      // Add Facebook SDK Script
      const script = document.createElement('script');
      script.src = `https://connect.facebook.net/en_US/sdk.js`;
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      
      script.onload = () => {
        initializeFacebookSDK();
      };
      
      document.body.appendChild(script);
    };

    const initializeFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: FB_APP_ID,
          cookie: true,
          xfbml: true,
          version: FB_SDK_VERSION
        });

        // Check initial login status
        window.FB.getLoginStatus((response) => {
          if (response.status === 'connected') {
            fetchUserData();
          }
          setSdkLoaded(true);
        });
      };
    };

    loadFacebookSDK();

    // Cleanup
    return () => {
      const facebookScript = document.querySelector('script[src*="connect.facebook.net"]');
      if (facebookScript) {
        facebookScript.remove();
      }
    };
  }, []);

  const fetchUserData = () => {
    window.FB.api('/me?fields=name,email,picture', (response) => {
      if (response && !response.error) {
        setUser(response);
      } else {
        setError('Failed to fetch user data');
      }
      setIsLoading(false);
    });
  };

  const handleLogin = async () => {
    if (!sdkLoaded) {
      setError('Facebook SDK is not yet loaded');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      window.FB.login((response) => {
        if (response.status === 'connected') {
          fetchUserData();
        } else {
          setError('Facebook login was cancelled or failed');
          setIsLoading(false);
        }
      }, {
        scope: 'email,public_profile',
        return_scopes: true
      });
    } catch (err) {
      setError('An error occurred during login');
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    if (window.FB) {
      window.FB.logout(() => {
        setUser(null);
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <AlertCircle className="h-4 w-4" />
          <div>
            <div className="font-semibold">Error</div>
            <div className="text-sm">{error}</div>
          </div>
        </div>
      )}

      {!user ? (
        <button
          onClick={handleLogin}
          disabled={isLoading || !sdkLoaded}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          )}
          {isLoading ? 'Connecting...' : 'Continue with Facebook'}
        </button>
      ) : (
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <img
              src={user.picture?.data?.url}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default FacebookLogin;
