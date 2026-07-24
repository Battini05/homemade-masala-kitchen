import Image from "next/image";

export default function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#home" aria-label="Homemade Masala Kitchen home">
        <Image
          src="/images/logo.jpeg"
          alt="Homemade Masala Kitchen logo"
          width={58}
          height={58}
          className="brandLogo"
          priority
        />
        <span>
          <strong>Homemade Masala Kitchen</strong>
          <small>Where every meal feels like home.</small>
        </span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#menu">Menu</a>
        <a href="#how-to-order">How to order</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
