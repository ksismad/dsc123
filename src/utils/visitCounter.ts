// Counter implementation using localStorage for buy clicks
export const getBuyClickCount = (): number => {
  const count = localStorage.getItem('buyClickCount');
  return count ? parseInt(count, 10) : 1285;
};

export const incrementBuyClickCount = (): number => {
  const currentCount = getBuyClickCount();
  const newCount = currentCount + 1;
  localStorage.setItem('buyClickCount', newCount.toString());
  return newCount;
};