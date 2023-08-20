export const MAX_SCREEN_MOBILE_WIDTH = 890;

const randomNumber = (start, end) => {
  return Math.floor(Math.random() * (end - start));
};

export function getRandomLogoForWishCard() {
  const logos = [
    require('../assets/images/kid.png'),
    require('../assets/images/family.png'),
    require('../assets/images/family_2.png'),
    require('../assets/images/family_3.png'),
    require('../assets/images/lunar_celebrate_1.png'),
  ];
  return logos[randomNumber(0, logos.length)];
}
