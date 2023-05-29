import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="h-72 w-screen bg-recuppagreen text-white">
      <div className="flex flex-row pl-32 pr-32 pt-10 justify-between">
        <div className="flex flex-col">
          <h2 className="text-xl">recuppa</h2>
          <span className="text-xl">Sip.</span>
          <span className="text-xl">Return.</span>
          <span className="text-xl">Repeat.</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Customers</h2>
          <div className="flex flex-col gap-1">
            <a href="">Help Desk</a>
            <a href="">Contact Us</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms and Condition</a>
            <a href="">Impressum</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Business</h2>
          <div className="flex flex-col gap-1">
            <a href="">Partner Portal</a>
            <a href="">Become a Partner</a>
            <a href="">Get a recuppa</a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <a href="https://www.instagram.com/recuppa/">
            <BsInstagram size={70}/>
          </a>
          <a href="https://www.instagram.com/recuppa/">
            <p>follow us on Instagram.</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
