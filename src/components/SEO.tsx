import { ReactNode, useEffect } from "react";

type Props = {
  title: string;
  description?: string;
  canonical?: string;
  children?: ReactNode;
};

const SEO = ({ title, description, canonical }: Props) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    if (description) setMeta("description", description.slice(0, 160));

    const url = canonical || window.location.href;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;

    // Open Graph minimal
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setOg("og:title", title);
    if (description) setOg("og:description", description.slice(0, 160));
    setOg("og:type", "website");
    setOg("og:url", url);
  }, [title, description, canonical]);

  return null;
};

export default SEO;
