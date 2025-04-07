interface ErrorComponentProps {
  error?: Error;
  errorMsg?: string;
  errorHeader?: string;
  className?: string;
}

const ErrorComponent = ({
  error,
  errorHeader,
  className,
}: ErrorComponentProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-[300px] text-white ${className}`}
    >
      <img src="/assets/svg/error.svg" alt="error" />
      {errorHeader ? <div>{errorHeader}</div> : <div>Error</div>}
      {error && <div>{error?.message}</div>}
    </div>
  );
};
export default ErrorComponent;
