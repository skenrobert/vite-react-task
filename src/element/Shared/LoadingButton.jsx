import React from 'react';
// import cx from 'classnames';

export default ({ loading, className, children, ...props }) => {
  const classNames = 
    // 'flex items-center',
    // 'focus:outline-none',
    {
      'pointer-events-none bg-opacity-75 select-none': loading
    };
  return (
    <button disabled={loading} className={classNames} {...props}>
      {loading && <div className="mr-2 btn-spinner" />}
      {children}
    </button>
  );
};
