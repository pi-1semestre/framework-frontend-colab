"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ImagePlus, Trash2, Upload, X } from "lucide-react";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { galleryItems, type GalleryItem } from "../data/content";

export type UserImage = { id: string; title: string; image: string };

function Lightbox({ items, index, setIndex, onClose }: { items: GalleryItem[]; index: number; setIndex: (index: number) => void; onClose: () => void }) {
  const item = items[index];
  useEffect(() => { const handler = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); if (event.key === "ArrowRight") setIndex((index + 1) % items.length); if (event.key === "ArrowLeft") setIndex((index - 1 + items.length) % items.length); }; document.addEventListener("keydown", handler); return () => document.removeEventListener("keydown", handler); }, [index, items.length, onClose, setIndex]);
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}><button type="button" className="lightbox-close" aria-label="Fechar" onClick={onClose}><X /></button><button type="button" aria-label="Imagem anterior" onClick={() => setIndex((index - 1 + items.length) % items.length)}><ChevronLeft /></button><figure><div className="lightbox-image" style={{ backgroundImage: `url(${item.image})`, backgroundPosition: item.position }} /><figcaption><strong>{item.title}</strong><span>{item.category}</span></figcaption></figure><button type="button" aria-label="Próxima imagem" onClick={() => setIndex((index + 1) % items.length)}><ChevronRight /></button></div>;
}

export function Gallery({ userImages, onImagesChange }: { userImages: UserImage[]; onImagesChange: (images: UserImage[]) => void }) {
  const categories = ["Todos", "Personagens", "Crystal Gems", "Beach City", "Homeworld", "Momentos", "Fusões"];
  const [filter, setFilter] = useState("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [userPreview, setUserPreview] = useState<UserImage | null>(null);
  const [pending, setPending] = useState<UserImage | null>(null);
  const visible = useMemo(() => filter === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === filter), [filter]);
  function upload(event: ChangeEvent<HTMLInputElement>) { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => setPending({ id: crypto.randomUUID(), title: file.name.replace(/\.[^.]+$/, ""), image: String(reader.result) }); reader.readAsDataURL(file); event.target.value = ""; }
  return <>
    <section className="gallery-section section" id="galeria"><div className="section-heading"><div><span className="eyebrow">GALERIA</span><h2>Momentos de um universo</h2></div><p>Explore cenas, personagens e lugares. Clique em uma imagem para abrir o modo de visualização.</p></div><div className="filter-row gallery-filters">{categories.map((item) => <button type="button" className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="gallery-grid">{visible.map((item, index) => <button type="button" className="gallery-item" key={item.id} onClick={() => setLightbox(index)}><span style={{ backgroundImage: `url(${item.image})`, backgroundPosition: item.position }} /><b>{item.title}</b><small>{item.category}</small></button>)}</div></section>
    <section className="upload-section section"><div><span className="eyebrow"><ImagePlus size={14} /> SUA GALERIA</span><h2>Adicione seus momentos favoritos</h2><p>As imagens ficam apenas neste navegador. Você pode visualizar, nomear e remover quando quiser.</p><label className="button primary"><Upload /> Adicionar imagem<input type="file" accept="image/*" onChange={upload} /></label></div><div className="user-gallery">{pending && <div className="pending-image"><Image src={pending.image} width={220} height={160} unoptimized alt="Prévia da imagem escolhida" /><input value={pending.title} aria-label="Nome da imagem" placeholder="Nome opcional" onChange={(event) => setPending({ ...pending, title: event.target.value })} /><div><button type="button" onClick={() => { onImagesChange([...userImages, pending]); setPending(null); }}>Adicionar à galeria</button><button type="button" onClick={() => setPending(null)}>Cancelar</button></div></div>}{userImages.map((item) => <figure key={item.id}><button className="user-image-open" type="button" aria-label={`Visualizar ${item.title}`} onClick={() => setUserPreview(item)}><Image src={item.image} width={220} height={160} unoptimized alt={item.title || "Imagem adicionada pelo usuário"} /></button><figcaption>{item.title || "Sem título"}<button type="button" aria-label={`Remover ${item.title}`} onClick={() => onImagesChange(userImages.filter((image) => image.id !== item.id))}><Trash2 /></button></figcaption></figure>)}{!pending && !userImages.length && <div className="empty-state"><ImagePlus /><strong>Sua galeria está vazia</strong><span>Escolha uma imagem para começar.</span></div>}</div></section>
    {lightbox !== null && <Lightbox items={visible} index={lightbox} setIndex={setLightbox} onClose={() => setLightbox(null)} />}
    {userPreview && <div className="user-preview" role="dialog" aria-modal="true" aria-label={userPreview.title}><button type="button" aria-label="Fechar visualização" onClick={() => setUserPreview(null)}><X /></button><Image src={userPreview.image} width={1200} height={900} unoptimized alt={userPreview.title || "Imagem adicionada pelo usuário"} /><strong>{userPreview.title || "Sem título"}</strong></div>}
  </>;
}
