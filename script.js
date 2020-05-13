TweenMax.from(".header-content h1", 2, {
  y: 50,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".header-content .get-started-btn", 2, {
  y: 50,
  delay: 2,
  opacity: 0,
});

TweenMax.from(".header-content .intro", 2, {
  y: 100,
  delay: 3,
  opacity: 0,
  ease: Power2.easeInOut,
});
