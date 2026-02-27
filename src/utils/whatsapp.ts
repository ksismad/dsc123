export const createWhatsAppLink = (title: string, subtitle: string, price: string): string => {
  const message = `Hello, I'm interested in purchasing ${title} - ${subtitle} for ${price}. Please provide more details.`;
  return `https://wa.me/917388288022?text=${encodeURIComponent(message)}`;
};

export const createThreeYearQuoteLink = (title: string, subtitle: string): string => {
  const message = `Hello, I'm interested in a 3-year quote for ${title} - ${subtitle}. Please provide pricing details.`;
  return `https://wa.me/917388288022?text=${encodeURIComponent(message)}`;
};