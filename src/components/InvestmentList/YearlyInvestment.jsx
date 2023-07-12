import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const YearlyInvestment = (props) => {
  return (
    <tr key={props.uniqueKey}>
      <td>{props.year}</td>
      <td>{formatter.format(props.savingsEndOfTheYear)}</td>
      <td>{formatter.format(props.yearlyInterest)}</td>
      <td>
        {formatter.format(
          props.savingsEndOfTheYear -
            props.initialInvestment -
            props.yearlyContribution * props.year
        )}
      </td>
      <td>
        {formatter.format(
          props.initialInvestment - props.yearlyContribution * props.year
        )}
      </td>
    </tr>
  );
};

export default YearlyInvestment;
