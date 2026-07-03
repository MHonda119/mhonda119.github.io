import { photos } from "../data/photoManifest.js";

const heroImageWidths = [640, 960, 1280, 1600];
const selfFacePhoto = photos.find((photo) => photo.id === "self-face");
const selfFaceWidths = [480, 720];

function assetUrl(path) {
  return new URL(`${import.meta.env.BASE_URL}${path}`, window.location.href)
    .href;
}

function heroSrcSet(format) {
  return heroImageWidths
    .map(
      (width) =>
        `${assetUrl(
          `assets/hero/sovereign-ai-cloud-${width}.${format}`
        )} ${width}w`
    )
    .join(", ");
}

function selfFaceSrcSet(format) {
  return selfFaceWidths
    .map(
      (width) =>
        `${assetUrl(
          `assets/photos/${selfFacePhoto.id}/portrait-${width}.${format}`
        )} ${width}w`
    )
    .join(", ");
}

export function Hero({ content }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <picture className="hero-bg-picture" aria-hidden="true">
        <source type="image/avif" srcSet={heroSrcSet("avif")} sizes="100vw" />
        <source type="image/webp" srcSet={heroSrcSet("webp")} sizes="100vw" />
        <img
          className="hero-bg-image"
          src={assetUrl("assets/hero/sovereign-ai-cloud-1600.jpg")}
          alt=""
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-inner">
        {selfFacePhoto ? (
          <picture className="hero-face-picture">
            <source
              type="image/avif"
              srcSet={selfFaceSrcSet("avif")}
              sizes="(max-width: 820px) 72vw, 34vw"
            />
            <source
              type="image/webp"
              srcSet={selfFaceSrcSet("webp")}
              sizes="(max-width: 820px) 72vw, 34vw"
            />
            <img
              className="hero-face-image"
              src={assetUrl(
                `assets/photos/${selfFacePhoto.id}/portrait-720.jpg`
              )}
              alt={selfFacePhoto.alt}
              width="720"
              height="960"
              fetchPriority="high"
              decoding="async"
              style={{ objectPosition: selfFacePhoto.position }}
            />
          </picture>
        ) : null}
        <div className="hero-content">
          <div className="hero-heading-copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 id="hero-title">{content.title}</h1>
          </div>
          <p className="hero-copy">{content.body}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#mission">
              {content.primaryAction}
            </a>
            <a className="button button-secondary" href="#contact">
              {content.secondaryAction}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
