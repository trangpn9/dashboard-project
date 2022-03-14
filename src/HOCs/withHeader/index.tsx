import type React from 'react';
import './Header.scss';

function withHeader(Component: any) {
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

export default withHeader;
