import { photos } from "../data/photoManifest.js";

const contactPhoto = photos.find((photo) => photo.id === "join-team");
const contactPhotoWidths = [640, 960];

function assetUrl(path) {
  return new URL(`${import.meta.env.BASE_URL}${path}`, window.location.href)
    .href;
}

function contactPhotoSrcSet(format) {
  return contactPhotoWidths
    .map(
      (width) =>
        `${assetUrl(
          `assets/photos/${contactPhoto.id}/card-${width}.${format}`
        )} ${width}w`
    )
    .join(", ");
}

export function Contact({ content, businessEmail, personalEmail }) {
  const contactItems = [
    { label: content.businessLabel, email: businessEmail },
    { label: content.personalLabel, email: personalEmail },
  ];

  return (
    <section
      className="section-band contact-band"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-inner contact-layout">
        <div className="contact-stack">
          <div className="contact-copy">
            <p className="section-kicker">{content.kicker}</p>
            <h2 id="contact-title">{content.title}</h2>
            <p>{content.body}</p>
          </div>
          <div className="contact-actions">
            {contactItems.map((item) => (
              <a
                className="contact-link"
                href={`mailto:${item.email}`}
                key={item.email}
              >
                <span>{item.label}</span>
                <strong>{item.email}</strong>
              </a>
            ))}
          </div>
        </div>
        {contactPhoto ? (
          <picture className="contact-photo-picture">
            <source
              type="image/avif"
              srcSet={contactPhotoSrcSet("avif")}
              sizes="(max-width: 820px) 100vw, 56vw"
            />
            <source
              type="image/webp"
              srcSet={contactPhotoSrcSet("webp")}
              sizes="(max-width: 820px) 100vw, 56vw"
            />
            <img
              className="contact-photo"
              src={assetUrl(`assets/photos/${contactPhoto.id}/card-960.jpg`)}
              alt={contactPhoto.alt}
              width="960"
              height="720"
              loading="lazy"
              decoding="async"
              style={{ objectPosition: contactPhoto.position }}
            />
          </picture>
        ) : null}
      </div>
    </section>
  );
}
