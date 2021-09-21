import React from 'react';

const Textarea = ({ placeholder, updateValue, initialVal }) => {
  return (
    <textarea
      id="tx-data"
      rows="3"
      className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      onChange={(e) => updateValue(e.target.value)}
      placeholder={placeholder}
      defaultValue={initialVal}
    ></textarea>
  );
};

const TextField = ({ placeholder, updateValue, initialVal }) => {
  return (
    <span className="mb-4">
      <input
        className="form-input block w-full sm:text-sm sm:leading-5"
        type="text"
        placeholder={placeholder}
        onChange={(e) => updateValue(e.target.value)}
        defaultValue={initialVal}
      />
    </span>
  );
};

const BooleanSelect = ({ initialVal, updateValue }) => {
  return (
    <select
      defaultValue=""
      className="my-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      onChange={(e) => updateValue(e.target.value)}
    >
      <option disabled value="">
        {' '}
        -- select an option --{' '}
      </option>
      <option value={false} selected={initialVal === 'false'}>
        false
      </option>
      <option value={true} selected={initialVal === 'true'}>
        true
      </option>
    </select>
  );
};

const Dropdown = ({ dropdownOptions = [], updateValue, disabled, val }) => {
  return (
    <select
      value={val ? val : ''}
      className="my-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      onChange={(e) => updateValue(e.target.value)}
      disabled={disabled}
    >
      {dropdownOptions.length !== 1 && (
        <option disabled value="">
          {' '}
          -- select an option --{' '}
        </option>
      )}
      {dropdownOptions.map((option, index) => (
        <option key={`${index}-${option.name}`} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

const Field = ({
  description,
  placeholder,
  type,
  val,
  updateValue,
  dropdownOptions,
  disabled,
}) => {
  let actualField;
  switch (type) {
    case 'dropdown':
      actualField = (
        <Dropdown
          updateValue={updateValue}
          dropdownOptions={dropdownOptions}
          disabled={disabled}
          val={val}
        />
      );
      break;
    case 'textfield':
      actualField = (
        <TextField
          updateValue={updateValue}
          placeholder={placeholder}
          initialVal={val}
        />
      );
      break;
    case 'boolean':
      actualField = (
        <BooleanSelect updateValue={updateValue} initialVal={val} />
      );
      break;
    default:
      actualField = (
        <Textarea
          updateValue={updateValue}
          placeholder={placeholder}
          initialVal={val}
        />
      );
  }

  return (
    <div>
      <div className="max-w-lg flex rounded-md shadow-sm"></div>
      <p className="mt-2 text-sm text-gray-500">
        {actualField}
        <span role="img" aria-label="Pointing up">
          ☝🏽
        </span>{' '}
        {description}
      </p>
    </div>
  );
};

const MethodCall = ({
  web3URL,
  web3Lib,
  currentMethod,
  codeSampleVisible,
  toggleSampleCode,
  description,
  disabled,
  args,
  runRequest,
  argumentList,
  onUpdateArguments,
}) => {
  return (
    <div className="w-3/12 py-2 px-4 border-r border-gray-200 shadow-md h-screen overflow-x-scroll">
      <h2 className="text-gray-500 text-xs font-medium tracking-wide mb-2">
        <span className="uppercase">Method:</span>{' '}
        <pre className="inline">{currentMethod}</pre>
      </h2>
      <hr className="my-2" />
      <p className="text-xs mb-3">{description}</p>
      {args.length > 0 && (
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-4">
          Possible Arguments
        </h2>
      )}
      {args.map((arg, i) => (
        <Field
          {...arg}
          key={i}
          val={argumentList[i]}
          updateValue={(val) => {
            onUpdateArguments(val, i);
          }}
        />
      ))}
      <span className="inline-flex w-full rounded-md shadow-sm mt-4">
        <button
          type="button"
          className={`${
            disabled ? 'opacity-25' : ''
          } w-full inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`}
          onClick={runRequest}
          disabled={disabled}
        >
          <svg
            className="-ml-0.5 mr-2 h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Send Request To Node
        </button>
      </span>

      <p className="mt-2 text-center">
        <button className="text-gray-500 text-sm" onClick={toggleSampleCode}>
          <svg
            viewBox="0 0 19 13"
            className="mr-1 h-4 w-4 text-gray-500 inline-block"
            fill="currentColor"
          >
            <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-180.000000, -3283.000000)"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M129.204085,3126.419 C129.587463,3126.032 129.587463,3125.405 129.204085,3125.018 L129.191207,3125.005 C128.807829,3124.618 128.186697,3124.618 127.803319,3125.005 L124.287534,3128.553 C123.904155,3128.94 123.904155,3129.568 124.287534,3129.955 L127.803319,3133.503 C128.186697,3133.89 128.807829,3133.89 129.191207,3133.503 L129.204085,3133.49 C129.587463,3133.103 129.587463,3132.476 129.204085,3132.089 L127.090057,3129.955 C126.706679,3129.568 126.706679,3128.94 127.090057,3128.553 L129.204085,3126.419 Z M142.712466,3128.553 L139.196681,3125.005 C138.814294,3124.618 138.192171,3124.618 137.808793,3125.005 L137.795915,3125.018 C137.412537,3125.405 137.412537,3126.032 137.795915,3126.419 L139.910934,3128.553 C140.294312,3128.94 140.294312,3129.568 139.910934,3129.955 L137.795915,3132.089 C137.412537,3132.476 137.412537,3133.103 137.795915,3133.49 L137.808793,3133.503 C138.192171,3133.89 138.814294,3133.89 139.196681,3133.503 L142.712466,3129.955 C143.095845,3129.568 143.095845,3128.94 142.712466,3128.553 L142.712466,3128.553 Z M136.809359,3124.40817 L131.74698,3135.23866 C131.582981,3135.57915 131.295245,3136 130.924037,3136 L130.904396,3136 C130.182602,3136 129.712209,3135.0197 130.031369,3134.3588 L135.064287,3123.63077 C135.228287,3123.29128 135.836165,3123.02511 135.836165,3123.02511 L135.836165,3123 C136.818198,3123 137.127538,3123.74728 136.809359,3124.40817 L136.809359,3124.40817 Z"
                    id="code-[#1115]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          {codeSampleVisible ? 'Hide' : 'View'} sample code
        </button>
      </p>
    </div>
  );
};

export { MethodCall };
