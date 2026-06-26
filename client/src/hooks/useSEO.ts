import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  robots?: string;
  jsonLd?: object;
}

const BASE_URL = "https://ugslabpept-e8adgwpk.manus.space";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(data: object) {
  const id = "json-ld-schema";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd() {
  const el = document.getElementById("json-ld-schema");
  if (el) el.remove();
}

export function useSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
  robots = "index, follow",
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Basic meta
    setMeta("description", description);
    setMeta("robots", robots);

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:image", ogImage || DEFAULT_OG_IMAGE, true);
    setMeta("og:site_name", "UGS LAB", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);
    setMeta("twitter:image", ogImage || DEFAULT_OG_IMAGE);

    // Canonical
    const canonicalUrl = canonical
      ? `${BASE_URL}${canonical}`
      : `${BASE_URL}${window.location.pathname}`;
    setLink("canonical", canonicalUrl);

    // JSON-LD
    if (jsonLd) {
      setJsonLd(jsonLd);
    } else {
      removeJsonLd();
    }
  }, [title, description, ogTitle, ogDescription, ogImage, canonical, robots, jsonLd]);
}
