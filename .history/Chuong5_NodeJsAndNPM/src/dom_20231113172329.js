import wallpaper from "./images/pexels-maxime-francis.jpg";
import bitcoinWhitepaper from "./pdfs/bitcoin.pdf";
const domHandler = () => {
  console.log(wallpaper);
  console.log(bitcoinWhitepaper);
  document.body.style.backgroundImage = `url(${wallpaper})`;
  const link = document.createElement("a");
  link.href = bitcoinWhitepaper;
  link.textContent = "Bitcoin Whitepaper";
  document.body.appendChild(link);
  const image = document.createElement("h1");
  image.textContent = " ahihi";
  document.body.appendChild(image);
};

export default domHandler;
