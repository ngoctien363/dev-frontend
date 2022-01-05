import React from 'react';
import styled from 'styled-components';
import Spinners from './Spinners';

const Container = styled.div`
    position: relative;
    min-width: 120px;
`;

const Progress = styled.div`
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

const LoadingSpinner = props => {
    const { show, children, ...attr } = props;
    return (
        <Container {...attr}>
            {children}
            <Loading className="d-flex justify-content-center" show={show}>
                <Progress>
                    <Spinners />
                </Progress>
            </Loading>
        </Container>
    );
}

export default LoadingSpinner;