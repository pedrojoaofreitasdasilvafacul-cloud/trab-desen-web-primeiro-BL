function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>&copy; {currentYear} - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;