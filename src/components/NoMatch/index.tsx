import './NoMatch.scss';
import bg_404 from './../../assets/images/bg_404.png';
import ErrorBoundary from './../../utils/ErrorBoundary';

const NoMatch = () => {
  return (
    <div className="d-flex justify-content-center">
      <ErrorBoundary>
        <img alt="bg_404" src={bg_404} />
      </ErrorBoundary>
    </div>
  );

};

export default NoMatch;