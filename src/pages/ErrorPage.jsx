import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}> BACK</Link>
        </li>
        <li>404 Not Found</li>
      </ul>
    </div>
  );
};

export default ErrorPage;
