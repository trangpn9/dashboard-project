import React from 'react';
import './Header.scss';

const withHeader = (Component: any) =>
class WithHeader extends React.Component {
  render() {
    return (
      <div className="header bg-gradient-default pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">
            <Component></Component>
          </div>
        </div>
      </div>
    );
  }
}

export default withHeader;
