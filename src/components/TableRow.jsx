export const TableRow = ({
  year,
  investentValue,
  interestYear,
  totalInterest,
  investedCapital,
}) => {
  console.log(
    'in it, ',
    year,
    investentValue,
    interestYear,
    totalInterest,
    investedCapital
  );
  return (
    <tr>
      <td>{year}</td>
      <td>{investentValue}</td>
      <td>{interestYear}</td>
      <td>{totalInterest}</td>
      <td>{investedCapital}</td>
    </tr>
  );
};
