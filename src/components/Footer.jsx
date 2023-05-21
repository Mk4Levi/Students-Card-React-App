//

function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <footer>
      <p className="footer">
        <a
          href="https://manthan-mk-portfolio.vercel.app/"
          className="footer-link"
          target="_blank"
        >
          Manthan-MK
        </a>{" "}
        || Copyright &copy; {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
