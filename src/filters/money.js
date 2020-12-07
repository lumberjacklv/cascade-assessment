export const money = (value, symbol = '$') => `${symbol}${parseFloat(value).toFixed(2)}`;

export default {};
