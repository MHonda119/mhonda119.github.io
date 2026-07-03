import { useEffect, useRef, useState } from "react";
import { photos } from "../data/photoManifest.js";
import { SectionTitle } from "./SectionTitle.jsx";

const interestImageWidths = [640, 960];

function assetUrl(path) {
  return new URL(`${import.meta.env.BASE_URL}${path}`, window.location.href)
    .href;
}

function interestImageSrcSet(photoId, format) {
  return interestImageWidths
    .map(
      (width) =>
        `${assetUrl(
          `assets/photos/${photoId}/card-${width}.${format}`
        )} ${width}w`
    )
    .join(", ");
}

export function Personal({ content }) {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const dialogRef = useRef(null);
  const photoMap = new Map(photos.map((photo) => [photo.id, photo]));
  const selectedPhoto = selectedInterest?.imageId
    ? photoMap.get(selectedInterest.imageId)
    : null;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (selectedInterest && !dialog.open) {
      dialog.showModal();
    }

    if (!selectedInterest && dialog.open) {
      dialog.close();
    }
  }, [selectedInterest]);

  function closeDialog() {
    setSelectedInterest(null);
  }

  return (
    <section
      className="section-band personal-band"
      id="personal"
      aria-labelledby="personal-title"
    >
      <div className="section-inner personal-layout">
        <div>
          <SectionTitle
            id="personal-title"
            kicker={content.kicker}
            title={content.title}
          />
        </div>
        <ul className="interest-list">
          {content.items.map((item) => (
            <li key={item.title}>
              <button type="button" onClick={() => setSelectedInterest(item)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog className="interest-dialog" ref={dialogRef} onClose={closeDialog}>
        {selectedInterest ? (
          <div className="interest-dialog-content">
            <div className="interest-dialog-header">
              <h3>{selectedInterest.title}</h3>
              <button
                className="interest-dialog-close"
                type="button"
                onClick={closeDialog}
                aria-label={content.closeLabel}
              >
                ×
              </button>
            </div>

            {selectedPhoto ? (
              <picture className="interest-dialog-picture">
                <source
                  type="image/avif"
                  srcSet={interestImageSrcSet(selectedPhoto.id, "avif")}
                  sizes="(max-width: 720px) 92vw, 680px"
                />
                <source
                  type="image/webp"
                  srcSet={interestImageSrcSet(selectedPhoto.id, "webp")}
                  sizes="(max-width: 720px) 92vw, 680px"
                />
                <img
                  className="interest-dialog-image"
                  src={assetUrl(
                    `assets/photos/${selectedPhoto.id}/card-960.jpg`
                  )}
                  alt={selectedPhoto.alt}
                  width="960"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: selectedPhoto.position }}
                />
              </picture>
            ) : null}

            <p>{selectedInterest.comment}</p>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
