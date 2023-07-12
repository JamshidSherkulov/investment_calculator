import React from "react";
import YearlyInvestment from "./YearlyInvestment";

const InvestmentList = (props) => {

  console.log(props.data)

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <YearlyInvestment
            uniqueKey={item.id}
            year={item.year}
            yearlyInterest={item.yearlyInterest}
            savingsEndOfTheYear={item.savingsEndOfYear}
            yearlyContribution={item.yearlyContribution}
            initialInvestment={props.userInput['current-savings']}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentList;
