import React from 'react';
import MainMenuItem from '../Shared/MainMenuItem';

export default ({ className }) => {
  return (
    <div className={className}>
      <MainMenuItem text="Dashboard" link="/dashboard" icon="dashboard" />
      <MainMenuItem text="Personas" link="/personas" icon="office" />
      <MainMenuItem text="Contacts" link="/contacts" icon="users" />
      <MainMenuItem text="About" link="/about" icon="printer" />
      <MainMenuItem text="Test" link="/test" icon="trash" />
      <MainMenuItem text="Test" link="/test" icon="store-front" />
      <MainMenuItem text="Test" link="/test" icon="shopping-cart" />
    </div>
  );
};
