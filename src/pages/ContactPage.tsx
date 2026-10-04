import { Link } from 'react-router';

function ContactPage() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:v_starkova@kbtu.kz">v_starkova@kbtu.kz</a></p>
      <p>GitHub: <a href="https://github.com/uxitoss">github.com/uxitoss</a></p>
      <Link to="/">Back home</Link>
    </div>
  );
}

export default ContactPage;