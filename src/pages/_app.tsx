import "tailwindcss/tailwind.css";

// Nextではページの初期化にAppコンポーネントを使用しています。このコンポーネントをオーバーライドして、ページの初期化をコントロールすることができる。
// デフォルトのAppをオーバーライドするには、以下のように./pages/_app.jsを作成します。
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
