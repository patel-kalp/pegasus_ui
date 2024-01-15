import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './Examples.css'
import Gist from "react-gist";

const Examples = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('py');

  const handleLanguageChange = (language:string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className='examples-container'>
      <h1>HTTP Requests</h1>
      <Nav className='justify-content-center examples-title' variant='underline' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link eventKey='py' onClick={() => handleLanguageChange('py')}>
            Python
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='js' onClick={() => handleLanguageChange('js')}>
            JavaScript
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='go' onClick={() => handleLanguageChange('go')}>
            Go
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='java' onClick={() => handleLanguageChange('java')}>
            Java
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='swift' onClick={() => handleLanguageChange('swift')}>
            Swift
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='subtitle'>HTTP requests can be made using various languages and libraries. Check out some of our favorite examples!</div>
      <div className="gist" >
      {selectedLanguage === 'py' && (
        <Gist id="99769cdc061b2716f72e"/>
      )}
      {selectedLanguage === 'js' && (
        <Gist id="e31d909c05bba8955a65"/>
      )}
      {selectedLanguage === 'go' && (
        <Gist id="fa007400e8f27db551dd"/>
      )}
      {selectedLanguage === 'java' && (
        <Gist id="0544407878bb72fd2ec2"/>
      )}
      {selectedLanguage === 'swift' && (
       <Gist id="931b43f85bd1db12de83"/>
      )}
      </div>
    </div>
  );
};

export default Examples;
