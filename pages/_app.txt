import '@/styles/globals.css'

/**
 * Root layout component that wraps all pages
 * ЗАЧЕМ: Обеспечивает глобальные стили и общее поведение для всего приложения
 * ПОЛЬЗА: Единообразие дизайна, централизованное управление состоянием (если добавим)
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}