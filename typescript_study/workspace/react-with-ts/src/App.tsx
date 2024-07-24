import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tsx01 from './basic/Tsx01';
import Tsx02Container from './basic/Tsx02Container';
import Container from './basic/Container';
import Counter from './state/Counter';
import CountContainer from './state/CountContainer';
import GenericState from './state/GenericState';
import PostContainer from './fetch/PostContainer';
import UserContainer from './fetch/task/UserContainer';
import B from './context/basic/B';
import AProvider from './context/basic/A';
import AnimalsContainer from './context/AnimalsContainer';

function App() {
  return (
    <>
      {/* <Tsx01 /> */}
      {/* <Tsx02Container /> */}
      {/* <Container /> */}
      {/* <CountContainer /> */}
      {/* <GenericState /> */}
      {/* <PostContainer /> */}
      {/* <UserContainer /> */}
      {/* <AProvider>
        <B />
      </AProvider> */}
      <AnimalsContainer />
      



    </>
  );
}

export default App;
