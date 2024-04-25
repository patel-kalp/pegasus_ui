import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './SDK.css'
import Gist from "react-gist";

const SDK = () => {
  const [selectedSdk, setSelectedSdk] = useState('ios');

  const handleSdkChange = (language:string) => {
    setSelectedSdk(language);
  };

  return (
    <div className='sdk-container'>
      <h1>SDKs</h1>
      <Nav className='justify-content-center sdk-title' variant='underline' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link eventKey='ios' onClick={() => handleSdkChange('ios')}>
            iOS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='android' onClick={() => handleSdkChange('android')}>
            Android
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='ruby' onClick={() => handleSdkChange('ruby')}>
            Ruby
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='js' onClick={() => handleSdkChange('js')}>
            JavaScript
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="info" >
      {selectedSdk === 'ios' && (
        <div>
          <h3>iOS</h3>
          <p>An iOS library which wraps the functionality of the API in Swift methods. It can easily be integrated into any iOS project.</p>
          <a href='https://github.com/nessieisreal/nessie-ios-sdk'>Source Code (Xcode `{'<'}` 7.0)</a>
          <a href="https://github.com/nessieisreal/nessie-ios-sdk-swift2">Source Code (Xcode `{'>='}` 7.0)</a>
        </div>
      )}
      {selectedSdk === 'android' && (
        <div>
        <h3>Andriod</h3>
          <p>An Android library which wraps the functionality of the API in Java methods. It can easily be integrated into any Android project.</p>
          <a href='https://github.com/nessieisreal/nessie-android-sdk'>Source Code</a>
        </div>
      )}
      {selectedSdk === 'ruby' && (
        <div>
        <h3>Ruby</h3>
        <p>A Ruby Gem which wraps the functionality of the API in methods that can easily be integrated into any Ruby or Ruby on Rails application.</p>
          <a href='https://rubygems.org/gems/capital_one'>Gem</a>
          <a href="https://shwheelz.github.io/capital_one/">Documentation</a>
          <a href="https://github.com/Shwheelz/capital_one">Source Code</a>
        </div>
      )}
      {selectedSdk === 'js' && (
        <div>
        <h3>JavaScript</h3>
        <p>A JavaScript library which wraps the functionality of the API in methods that can easily be integrated into any web application. This library uses <a href='https://jquery.com/'>JQuery</a>.</p>
          
          <a href="https://github.com/nessieisreal/nessie-javascript-sdk">Source Code</a>     
        </div>
      )}

      </div>
    </div>
  );
};

export default SDK;
