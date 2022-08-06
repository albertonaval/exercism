// @ts-check

const WORKABLE_DAYS_IN_A_MONTH = 22;
const WORKING_HOURS_PER_DAY = 8.0;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return WORKING_HOURS_PER_DAY * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let fullMonthsNumber = Math.floor(numDays / WORKABLE_DAYS_IN_A_MONTH);
  let fullMonthsTotal = monthTotal(ratePerHour, discount) * fullMonthsNumber;

  let remainingDays = numDays % WORKABLE_DAYS_IN_A_MONTH;
  let remainingDaysTotal = remainingDays * dayRate(ratePerHour);

  return Math.ceil(fullMonthsTotal + remainingDaysTotal);
}

function monthTotal(ratePerHour, discount) {
  return dayRate(ratePerHour) * WORKABLE_DAYS_IN_A_MONTH * (1 - discount);
}