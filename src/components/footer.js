import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="h-72 w-screen bg-recuppalightgreen">
      <div className="p-6 flex flex-col">
        <h2 className="text-xl">recuppa</h2>
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-2 gap-x-4">
            <a href="">Careers</a>
            <a href="">Our Cafe</a>
            <a href="">Consumer Care</a>
            <a href="">FAQ</a>
            <a href="">Contact Us</a>
          </div>
					<span className="text-4xl">Sip. Return. Repeat.</span>
        </div>

        <div className="mt-4">
          <a href="https://www.instagram.com/recuppa/">
            <BsInstagram />
          </a>
        </div>
        <hr className="mt-4" />
        <div className="mt-4 flex flex-row gap-3">
          <a href="">
            <p>Website Terms</p>
          </a>
          <a href="">
            <p>Privacy Policy</p>
          </a>
          <a href="">
            <p>Privacy Policy</p>
          </a>
          <a href="">
            <p>Privacy Policy</p>
          </a>
          <a href="">
            <p>Privacy Policy</p>
          </a>
          <a href="">
            <p>Privacy Policy</p>
          </a>
          <a href="">
            <p>Privacy Policy</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
