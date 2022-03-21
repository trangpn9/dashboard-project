import type React from 'react';
import './Header.scss';

const Header = ({ children, classBgHeader }: {children: React.ReactNode, classBgHeader: string | null}) => {
  return (
    <div className={`header pb-8 pt-5 pt-md-8 ${classBgHeader}`}>
      <div className="container-fluid">
        <div className="header-body">
          {children}
        </div>
      </div>
    </div>
  );

}

export default Header;
