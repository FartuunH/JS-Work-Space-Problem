/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */


const calculatePrice = (itemPrice, salesTax, shippingPrice) => {
  const mugPriceAfterTax = itemPrice * (1 + salesTax);
  const mugPriceAfterShipping = mugPriceAfterTax + shippingPrice;
  return mugPriceAfterShipping.toFixed(2);
};
const previewFullPrice = (salesTax, shippingPrice) => {
   items = [
   { name: 'shirtPrice', price:  30.99 },
   { name: 'sweatshirtPrice', price:  40.99 },
   { name: 'smallPosterPrice', price: 15.99 },
   { name: 'largePosterPrice', price: 22.99 },
   { name: 'mugPrice', price: 12.99 },
  ];

  const calculateItemPrice = (item) => calculatePrice(item.price, salesTax, shippingPrice);
  return items.map((item) => calculateItemPrice(item));
};
module.exports = previewFullPrice;
