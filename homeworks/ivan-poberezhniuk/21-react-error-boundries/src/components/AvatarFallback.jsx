import './AvatarFallback.css';

const AvatarFallback = ({ error, resetErrorBoundary, isLoading }) => {
  return (
    <div
      className="error-boundary__container"
      onClick={() => {
        console.log('resetErrorBoundary');
        resetErrorBoundary();
      }}
    >
      <span className="error-boundary">{error?.message}</span>
      <div
        className={
          isLoading ? 'error-boundary__refresh error-boundary__loading' : 'error-boundary__refresh'
        }
      />
    </div>
  );
};

export default AvatarFallback;
