import { calculateGrossMonthlyPay } from '../calculateGrossMonthlyPay';

test('calculates monthly pay by dividing annual pay by 12', () => {
  expect(calculateGrossMonthlyPay(120000)).toBe(10000);
});
