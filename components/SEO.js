const SEO = ({ 
  title = "Elmar Bayramov - Marketing & Operations Leader",
  description = "Award-Winning Marketing & Operations Leader | Data-Driven Strategist | Builder of High-Performance Business Systems",
  image = "/og-image.png"
}) => {
  const siteUrl = "https://portfolio-clean-one.vercel.app"
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

export default SEO