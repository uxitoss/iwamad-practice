type FooterProps = {
    year: number;
    name: string;
  };
  
  function Footer({ year, name }: FooterProps) {
    return (
      <footer style={{ textAlign: 'center' }}>
        <p>
          &copy; <time dateTime={String(year)}>{year}</time> {name}
        </p>
      </footer>
    );
  }
  
  export default Footer;