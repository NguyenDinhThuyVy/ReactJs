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
  const image = document.createElement("img");
  image.src =
    "https://tse2.mm.bing.net/th?id=OIP.-cbx3pbKBX9WN6IP0bLsjgHaJ5&pid=Api&P=0&h=180";
};
document.body.appendChild(image);
export default domHandler;
