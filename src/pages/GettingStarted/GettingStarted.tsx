import Stack from 'react-bootstrap/Stack';
import welcome_nessie from '../../static/welcome_nessie.png';
import APIdoc from '../../static/APIdoc.png'
import postman from '../../static/postman.png'
import "./GettingStarted.css";

const GettingStarted = () =>(
  <div className="getting-started-container">
      <div className="p-2">
      <h1>Getting Started</h1>
        <div className="banner">
        <h2>Log in with GitHub</h2>
      <p>If you don't have a Github account, you can sign up for free here.</p>
      </div>
       <h2>Retrieve your API key</h2>
      <p>Go to your profile to get your key.</p>
      <img
          src={welcome_nessie}
          alt="welcome to Nessie"
        />
        <p>You will need it to make requests to the API. Use your API key by adding it to each request as a query parameter:
api.reimaginebanking.com/customers?key=9203847529304875</p>
        <p>You can also use your key with the box at the top of the interactive documentation page.</p>
        <img
          src={APIdoc}
          alt="API Documentation"
        />
      </div>
      <hr />
      <div className="p-2">
      <h2>API Endpoint Permissions</h2>
      <h3>Enterprise Endpoints</h3>
      <p>When making requests to enterprise endpoints, you are acting as an analyst at Capital One. You can perform GET requests to read all data in the system. However, you cannot add, modify, or delete any data. All enterprise URLs start with api.reimaginebanking.com/enterprise</p>
      <h3>Customer Endpoints</h3>
      <p>When making requests to customer endpoints, you are acting as a customer of Capital One. You can perform requests that involve data that you own. Go to your profile to see a table outlining the customers you have access to. Any request URLs that do not include /enterprise are customer endpoints.</p>
      </div>
      <hr/>
      <div className="p-2">
      <h2>Reading our Documentation</h2>
      <p>All of the API endpoints can be found on our interactive documentation page. Click on an endpoint to find out how to use it. To test the endpoint, follow the instructions to fill out the path and query parameters as necessary and click "Try It Out!".</p>
      <h3>Implementation Notes</h3>
      <p>The implementation notes section documents what the endpoint does.</p>
      <h3 className='.h3'>Response Class</h3>
      <p>This section describes the JSON string you can expect to receive from the HTTP request. Click on Schema to see the format of the JSON string and click Model to see the description of each of the fields.</p>
      <h3>Parameters</h3>
      <p>This section lists the required and optional input parameters to make the HTTP request. If an input JSON string is required you’ll see the Model and Schema specifications, as you did with the response class. Click on the displayed Schema to copy it into the text box and save some time.</p>
      </div>
      <hr />
      <div className="p-2">
      <h2>Using Postman</h2>
      <p>Postman is a popular chrome extension used to make direct HTTP requests. It allows you to bookmark requests and look through your request history to simplify testing and debugging. Just make sure to include the appropriate headers and don't forget your API key.</p>
      <img
          src={postman}
          alt="postman"
        />
        </div>
        </div>
);

export default GettingStarted;