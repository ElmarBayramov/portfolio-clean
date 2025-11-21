/**
 * SEO компонент для управления мета-тегами и SEO оптимизацией
 * ЗАЧЕМ: Централизованное управление SEO для всех страниц
 * ПОЛЬЗА: Улучшает поисковую видимость, соц. сети превью, и доступность
 */
const SEO = ({ 
  title = "Elmar Bayramov - Marketing & Operations Leader",
  description = "Award-Winning Marketing & Operations Leader | Data-Driven Strategist | Builder of High-Performance Business Systems",
  keywords = "marketing, operations, strategy, data-driven, growth, B2B, F&B, retail"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </>
  )
}

export default SEO