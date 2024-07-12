import React from 'react';
import { useRouteError } from 'react-router-dom';

type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  const errorCheck = (error: any): error is ErrorResponse =>
    'data' in error && 'status' in error && 'statusText' in error;

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{errorCheck(error) && <i>{error.statusText || error.message}</i>}</p>
    </div>
  );
};

export default ErrorPage;
