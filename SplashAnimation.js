const canvas = document.getElementById("sonya-splash");
const context = canvas.getContext("2d");

const currentFrame = index => (
  `assets/SonyaWinsAnimation/splash3/frame-${index.toString().padStart(6,"0")}.jpg`
   // `assets/TestAnimation/frame-${index.toString().padStart(6,"0")}.png`

)

// const frameCount = 196;
const frameCount = 392;

const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(0);
canvas.width = 1080;
canvas.height = 1920;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
  const scrollTop = document.scrollingElement.scrollTop;
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

  const scrollFraction = (scrollTop / maxScrollTop) * 1.9;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  console.log("frame index " + frameIndex + " scrollTop " + scrollTop + " maxScrollTop " + maxScrollTop + " scrollFraction " + scrollFraction);

  requestAnimationFrame(() => updateImage(frameIndex))
});

preloadImages()
