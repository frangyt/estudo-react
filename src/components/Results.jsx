import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ inputValues }) {
  const results = calculateInvestmentResults(inputValues);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  console.log(results);

  return (
    <table id="result">
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
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear.toFixed(2))}</td>
              <td>{formatter.format(result.interest.toFixed(2))}</td>
              <td>{formatter.format(totalInterest.toFixed(2))}</td>
              <td>{formatter.format(totalAmountInvested.toFixed(2))}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
