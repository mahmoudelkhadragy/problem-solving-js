/*
A construction company has built a skyscraper with N floors and wants to calculate how much revenue it can receive from the sale of all apartments.
There is only one apartment per floor. The cost of the apartment depends on what floor it is on. The cost of the apartment increases by $1,000 every M floors. The cost of the apartment on the first floor is X dollars.
For example: the house has 30 floors; the cost increases every 10 floors; the price of an apartment on the ground floor is $10,000. In this case, apartments on floors 1 to 10 will cost $10,000, floors 11 to 20 will cost $11,000, and floors 21 to 30 will cost $12,000.
You are given positive integers N, M, X.
Write a function that returns the amount that the construction company will be able to receive from the sale of all apartments.
*/
function countRevenueOfBuilding(n, m, x) {
  let base = x;
  let result = 0;
  let rounds = Math.floor(n / m);
  let rest = n - m * rounds;
  for (let i = 0; i < rounds; i++) {
    if (i == 0) {
      result += m * x;
    } else {
      base += 1000;
      result += m * base;
    }
  }
  base += 1000;
  return result + rest * base;
}

console.log(countRevenueOfBuilding(30, 6, 10000));
