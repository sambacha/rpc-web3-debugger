import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Web3RpcCalls from '../helpers/web3Config';

const CodeSample = ({
  web3Lib,
  args,
  currentMethod,
  hideCodeSample,
  url,
  visible,
}) => {
  const codeSampleText =
    currentMethod &&
    web3Lib &&
    url &&
    Web3RpcCalls[currentMethod][web3Lib]['codeSample'](url, ...args);
  const classes = `${visible ? '' : 'hidden'} fixed inset-0 overflow-hidden`;

  return (
    <div className={classes}>
      <div className="absolute inset-0 overflow-hidden">
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
              <header className="px-4 sm:px-6">
                <div className="flex items-start justify-between space-x-3">
                  <h2 className="text-base leading-7 font-medium text-gray-900">
                    Code Sample for{' '}
                    <pre className="inline">{currentMethod}</pre>
                  </h2>
                  <div className="h-7 flex items-center">
                    <button
                      aria-label="Close panel"
                      className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                      onClick={hideCodeSample}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </header>
              <div className="relative flex-1 px-4 sm:px-6 sm:pr-10">
                <div className="absolute inset-0 px-4 sm:px-6 overflow-hidden">
                  <SyntaxHighlighter
                    language="javascript"
                    style={docco}
                    className="round rounded-lg border"
                    showLineNumbers={true}
                    wrapLines={true}
                    customStyle={{ fontSize: '10px' }}
                  >
                    {codeSampleText}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { CodeSample };
