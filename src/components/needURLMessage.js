import React from 'react';

/**
* @const NeedURLMessage
* Enter an RPC Endpoint URL
*/
const NeedURLMessage = () => {
  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-4">
        Please ENTER a RPC Endpoint URL in the nav bar
      </h2>
      <hr className="my-2" />
      <p className="text-xs mb-3">
        Enter an RPC Provider Endpoint URL to check for issues
        Example:
        `https://api.sushirelay.com/v1` 
      </p>
    </div>
  );
};

export { NeedURLMessage };
