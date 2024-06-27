import footerLogo from "../assets/images/Distrofy w Logo tr.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-6 bg-black text-white grid grid-cols-3 items-center">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover text-white">Music Distribution</a>
          <a className="link link-hover text-white">Artist Branding</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </nav>
      </footer>
      <div className="footer items-center p-4 bg-black text-white">
        <aside className="items-center grid-flow-col">
          <img className="w-7 m-2" src={footerLogo} alt="Footer Logo" />
          <p>Copyright © 2024 - All rights reserved by Sharif Obaidullah</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
