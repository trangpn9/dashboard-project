import React from "react";
import './NoMatch.scss';
import * as bg_404 from './../../assets/images/bg_404.png'


const NoMatch = () => {
  return (
    <div className="d-flex justify-content-center">
      <img alt="bg_404" src={bg_404} />
    </div>
  );

};

export default NoMatch;