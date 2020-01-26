import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const ErrorPageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #fc5c7d;
  background: -webkit-linear-gradient(to left, #6a82fb, #fc5c7d);
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
  align-items: center;
  justify-content: center;
  color:#fff;
  font-size:30px;

  > .separator {
    font-size:25px;
    margin-left:10px;
    margin-right:10px;
  }
`;

const Error: NextPage = () => (
  <ErrorPageContainer>
    404
    <span className="separator">|</span>
    Page Not Found!
  </ErrorPageContainer>
);

export default Error;
