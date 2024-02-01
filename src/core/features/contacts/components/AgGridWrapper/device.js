export const isUserDevice = (user) => (
  user && user.license === 'device'
);

export const isTouchScreenDevice = () => window.matchMedia('(pointer: coarse)').matches;
