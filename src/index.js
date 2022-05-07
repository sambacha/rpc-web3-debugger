import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  CodeSampleContainer,
  LogsContainer,
  MethodCallContainer,
  StatusBarContainer,
  NavBarContainer,
  Web3MenuContainer,
  SponsoredAdContainer,
} from './containers';
import { AppProvider } from './context';
import { Router } from '@gatsbyjs/reach-router';

import './tailwind.output.css';

const Wrapper = () => (
  <AppProvider>
    <div>
      <NavBarContainer />
      <StatusBarContainer />

      <div className="flex">
        <Web3MenuContainer />
        <MethodCallContainer />
        <LogsContainer />
      </div>

      <CodeSampleContainer />
      <SponsoredAdContainer />
    </div>
  </AppProvider>
);

const App = () => (
  <Router>
    <Wrapper default />
    <Wrapper path="/:web3URL" />
    <Wrapper path="/:web3URL/:web3Lib" />
    <Wrapper path="/:web3URL/:web3Lib/:currentMethod" />
    <Wrapper path="/:web3URL/:web3Lib/:currentMethod/*formArgs" />
  </Router>
);

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
