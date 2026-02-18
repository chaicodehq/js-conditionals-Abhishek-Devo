/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  let returnObj = {};

  let checkInt = Number.isInteger(serviceRating)
  if (billAmount > 0 && serviceRating >= 1 && serviceRating <= 5 && checkInt) {
    if (serviceRating === 1) {
      returnObj.tipPercentage = 5;
      let tip = 0.05 * billAmount;
      returnObj.tipAmount = tip;

      //total
      returnObj.totalAmount = billAmount + tip;
      return returnObj;
    } else if (serviceRating === 2) {
      returnObj.tipPercentage = 10;
      let tip = 0.1 * billAmount;
      returnObj.tipAmount = tip;

      //total
      returnObj.totalAmount = billAmount + tip;
      return returnObj;
    } else if (serviceRating === 3) {
      returnObj.tipPercentage = 15;
      let tip = 0.15 * billAmount;
      returnObj.tipAmount = tip;

      //total
      returnObj.totalAmount = billAmount + tip;
      return returnObj;
    } else if (serviceRating === 4) {
      returnObj.tipPercentage = 20;
      let tip = 0.2 * billAmount;
      returnObj.tipAmount = tip;

      //total
      returnObj.totalAmount = billAmount + tip;
      return returnObj;
    } else {
      returnObj.tipPercentage = 25;
      let tip = 0.25 * billAmount;
      returnObj.tipAmount = tip;

      //total
      returnObj.totalAmount = billAmount + tip;
      return returnObj;
    }
  } else {
    return null;
  }
}
