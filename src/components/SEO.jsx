import { Helmet } from "react-helmet-async";

const siteName = "Ína S. Stefánsdóttir Portfolio";
const defaultDescription =
  "Portfolio of Ína S. Stefánsdóttir, a UI/UX designer and frontend developer focused on clean, modern, and user-centered digital experiences.";

export default function SEO({
  title,
  description = defaultDescription,
  image = "/seo-image.png",
  url = "https://portfolio-ina-s.netlify.app/",
  type = "website",
}) {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
