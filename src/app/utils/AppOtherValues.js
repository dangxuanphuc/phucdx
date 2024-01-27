export const MAX_SCREEN_MOBILE_WIDTH = 890;

const randomNumber = (start, end) => {
  return Math.floor(Math.random() * (end - start));
};

export function getRandomLogoForWishCard() {
  const logos = [
    require('../assets/images/new_year/kid.png'),
    require('../assets/images/new_year/family.png'),
    require('../assets/images/new_year/family_2.png'),
    require('../assets/images/new_year/lunar_celebrate_1.png'),
  ];
  return logos[randomNumber(0, logos.length)];
}
