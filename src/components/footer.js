import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="h-72 w-screen bg-recuppalightgreen">
      <div>
				<h2 className="">recuppa</h2>
				<div className="grid grid-cols-2">
					<p>Careers</p>
					<p>Our Cafe</p>
					<p>Consumer Care</p>
					<p>FAQ</p>
					Contact Us
				</div>
				<div>
					<a href="https://www.instagram.com/recuppa/">
						<BsInstagram />
					</a>
				</div>
			</div>
    </footer>
  );
};

export default Footer
