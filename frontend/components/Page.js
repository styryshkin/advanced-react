import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';

const Page = ({ children }) => (
  <div>
    <Header />
    <Meta />
    {children}
  </div>
);

Page.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
};

export default Page;
