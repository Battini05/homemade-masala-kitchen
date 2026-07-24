import Image from "next/image";
import Header from "../components/Header";
import MenuCard from "../components/MenuCard";
import { business, menuItems } from "../data/menu";

export default function HomePage() {
  const generalMessage = encodeURIComponent(
    `Hi ${business.name}, I would like to place an order.\n\nName:\nItems and quantities:\nPreferred date:\nPickup or delivery:\nSuburb/postcode:\nAllergy information (if any):`
  );

  const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${generalMessage}`;

  return (
    <>
      <Header />

      <main>
        <section id="home" className="hero">
          <div className="heroText">
            <span className="eyebrow">Fresh • Homemade • Prepared to order</span>
            <h1>{business.heroHeading}</h1>
            <p>{business.heroText}</p>
            <div className="heroButtons">
              <a className="button" href="#menu">View menu</a>
              <a className="button buttonSecondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Order on WhatsApp
              </a>
            </div>
            <p className="smallNote">{business.orderNotice}</p>
          </div>

          <div className="heroImageCard">
            <Image
              src="/images/banner.jpeg"
              alt="Homemade Masala Kitchen"
              width={1200}
              height={675}
              className="heroImage"
              priority
            />
          </div>
        </section>

        <section id="menu" className="section">
          <div className="sectionHeading">
            <span className="eyebrow">Our menu</span>
            <h2>Homestyle favourites</h2>
            <p>Prices shown are starting prices. Final availability and order details are confirmed on WhatsApp.</p>
          </div>

          <div className="menuGrid">
            {menuItems.filter(item => item.available).map(item => (
              <MenuCard
                key={item.id}
                item={item}
                whatsappNumber={business.whatsappNumber}
              />
            ))}
          </div>
        </section>

        <section id="how-to-order" className="section altSection">
          <div className="sectionHeading">
            <span className="eyebrow">Simple ordering</span>
            <h2>How it works</h2>
          </div>

          <div className="steps">
            <article><span>1</span><h3>Choose your food</h3><p>View the menu and decide the items and quantities you need.</p></article>
            <article><span>2</span><h3>Message us</h3><p>Send your order, preferred date, suburb and pickup or delivery choice on WhatsApp.</p></article>
            <article><span>3</span><h3>Receive confirmation</h3><p>We confirm availability, final total, payment and collection or delivery details.</p></article>
          </div>
        </section>

        <section id="about" className="section twoColumn">
          <div>
            <span className="eyebrow">About us</span>
            <h2>Food that feels like home</h2>
            <p>
              {business.name} prepares small-batch Indian food using familiar recipes,
              fresh ingredients and careful home-style cooking. Meals are prepared based
              on confirmed orders to support freshness and reduce waste.
            </p>
            <p>
              Please tell us about allergies or dietary requirements before ordering.
              We will explain what we can accommodate, but our kitchen may handle common allergens.
            </p>
          </div>

          <aside className="infoCard">
            <h3>Pickup and delivery</h3>
            <p>{business.serviceArea}</p>
            <p>Delivery fees and minimum order values may vary by suburb.</p>
          </aside>
        </section>

        <section id="contact" className="section contactSection">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>Ready to order?</h2>
            <p>Contact us for menu availability, meal packs, family orders and delivery details.</p>
          </div>
          <div className="contactActions">
            <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us</a>
            <a className="textLink" href={`mailto:${business.email}`}>{business.email}</a>
            <span>{business.phoneDisplay}</span>
          </div>
        </section>
      </main>

      <footer>
        <Image src="/images/logo.jpeg" alt="" width={54} height={54} className="footerLogo" />
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </footer>

      <a className="floatingWhatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Order using WhatsApp">
        WhatsApp
      </a>
    </>
  );
}
