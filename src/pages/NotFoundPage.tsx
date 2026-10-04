import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>This page does not exist.</p>
      <Link to="/">Back home</Link>
    </div>
  );
}

export default NotFoundPage;