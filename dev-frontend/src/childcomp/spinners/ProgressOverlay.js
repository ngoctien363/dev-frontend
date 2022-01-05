import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';

const Container = styled.div`
    position: relative;
    min-width: 120px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    -webkit-transition: width 0.6s ease;
    transition: width 0.6s ease;
    background-color: #ffffffc2 !important;
    color: #fff;
    width: 100%;
`;

const Loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 100%;
    opacity: 0.6;
    display: ${props => props.show ? 'flex' : 'none'} !important;
`;

const ProgressOverlay = props => {
  const { show, children, percent, ...attr } = props;
  return (
    <Container {...attr}>
      {children}
      <Loading className="d-flex justify-content-center" show={show}>
        <Wrapper>
          <Progress strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={percent} status="active" />
        </Wrapper>
      </Loading>
    </Container>
  );
}

export default ProgressOverlay;