import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './Examples.css'
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
      {selectedLanguage === 'py' && (
        <script src="https://gist.github.com/freefood89/99769cdc061b2716f72e.js"></script>
      )}
      {selectedLanguage === 'js' && (
        <script src="https://gist.github.com/freefood89/e31d909c05bba8955a65.js"></script>
      )}
      {selectedLanguage === 'go' && (
        <script src="https://gist.github.com/freefood89/fa007400e8f27db551dd.js"></script>
      )}
      {selectedLanguage === 'java' && (
        <script src="https://gist.github.com/freefood89/0544407878bb72fd2ec2.js"></script>
      )}
      {selectedLanguage === 'swift' && (
       <script src="https://gist.github.com/freefood89/931b43f85bd1db12de83.js"></script>
      )}
    </div>
  );
};

export default Examples;
