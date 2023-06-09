import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisplayNews from './DisplayNews';
import DisplayNewsStory from './DisplayNewsStory'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={ <App/> }></Route>
        <Route path='/displayNews/:countryCode' element={ <DisplayNews/> }></Route>
        <Route path='/displayNews/:countryCode/:storyId' element={ <DisplayNewsStory/> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
