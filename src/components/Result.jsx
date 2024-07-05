import { calculateInvestmentResults, formatter } from '../util/investment';
import { TableRow } from './TableRow';

export const Result = ({ userInput }) => {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData);
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;

          const totalAmountInvested = data.valueEndOfYear - totalInterest;
          return (
            <TableRow
              year={data.year}
              investentValue={formatter.format(data.valueEndOfYear)}
              interestYear={formatter.format(data.interest)}
              totalInterest={formatter.format(totalInterest)}
              investedCapital={formatter.format(totalAmountInvested)}
            />
          );
        })}
      </tbody>
    </table>
  );
};
