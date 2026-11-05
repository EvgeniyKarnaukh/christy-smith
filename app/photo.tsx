"use client";

import Image from "next/image";
import { useRef } from "react";
import photos from "./data/photos.json";

export default function Photo({ index, caption, hero = false }: { index: number; caption?: string; hero?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = photos[index];
  return (
    <figure className={`photo ${hero ? "hero-photo" : ""}`}>
      <button className="photo-button" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge photograph: ${photo.alt}`}>
        <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={hero ? "(max-width: 760px) 90vw, 42vw" : "(max-width: 760px) 90vw, 680px"} loading={hero ? "eager" : "lazy"} />
        <span className="photo-expand" aria-hidden="true">↗</span>
      </button>
      {caption && <figcaption>{caption}</figcaption>}
      <dialog ref={dialog} className="photo-dialog" aria-label={photo.alt} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className="dialog-close" onClick={() => dialog.current?.close()} aria-label="Close photograph">Close <span aria-hidden="true">×</span></button>
        {/* The original file lets visitors inspect archival details at full resolution. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
        <p>{caption || photo.alt}</p>
      </dialog>
    </figure>
  );
}
