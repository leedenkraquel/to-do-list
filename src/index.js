import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import * as AWS from 'aws-sdk';

// configure the settings for aws user configuration
AWS.config.update({
    region: "us-west-1",
    secretAccessKey: "9v/Ef/WRqoaFaNAg7FxXkVIUQ9ZSEn2ewl/AY1cX",
    accessKeyId: "AKIAUXF3BYXVDNHZH573"
});

ReactDOM.render(
  <App />,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
