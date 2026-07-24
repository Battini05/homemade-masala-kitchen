import Image from "next/image";

export default function MenuCard({ item, whatsappNumber }) {
  const message = encodeURIComponent(
    `Hi Homemade Masala Kitchen, I would like to order ${item.name}. Please confirm availability, quantity options, total price, pickup/delivery and available date.`
  );

  return (
    <article className="menuCard">
      <div className="imageWrap">
        <Image
          src={item.image}
          alt={item.name}
          width={700}
          height={480}
          className="foodImage"
        />
        <span className="category">{item.category}</span>
      </div>

      <div className="menuContent">
        <div className="menuTitleRow">
          <h3>{item.name}</h3>
          <strong>${item.price}</strong>
        </div>
        <p>{item.description}</p>
        <a
          className="button buttonSmall"
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
