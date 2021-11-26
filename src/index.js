import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-wgk5ipt6.us.auth0.com"
const clientId = "iV3hcZpU5fah0hwC6gSD2Vw38OD017cy"

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
  <App />
  </Auth0Provider>,
  document.getElementById('root')
);


