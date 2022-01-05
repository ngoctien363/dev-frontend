import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from "styled-components";
import "./style/modal-show-loading.css";
import Spinners from "./childcomp/spinners/Spinners";

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  opacity: 0.5;
  padding: 1rem 1.5rem;
  width: auto;
  border-radius: 0.5rem;
`;


ReactDOM.render(
  <React.StrictMode>
    <App />
    <div
      id="Modal-show-loading-data-api-call"
      className="Modal-show-loading-data-modal"
    >
      <ModalContent>
        <Spinners />
      </ModalContent>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
