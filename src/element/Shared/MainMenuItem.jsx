import React from 'react';
// import { InertiaLink } from '@inertiajs/inertia-react';
// import classNames from 'classnames';
import Icon from '../Shared/Icon';

export default ({ icon, link, text }) => {
  // const isActive = route().current(link + '*');

  const iconClasses = {
    'text-white fill-current': true,
    'text-indigo-400 group-hover:text-white fill-current': !true
  };

  const textClasses = {
    'text-white': true,
    'text-indigo-200 group-hover:text-white': !true
  };

  return (
    <div className="mb-4">
      {/* <InertiaLink href={route(link)} className="flex items-center group py-3">
        <Icon name={icon} className={iconClasses} />
        <div className={textClasses}>{text}</div>
      </InertiaLink> */}
    </div>
  );
};
