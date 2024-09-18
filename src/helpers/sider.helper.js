import { Link } from "react-router-dom";

const day = ['Day3', 'Day4', 'Day5', 'Day6', 'Day7', 'Day8']

export const items2 = day.map(
  (day, index) => {
    return {
      key: `${day}`,
      label: `${day}`,
      children: new Array(5).fill(null).map((_, j) => {
        const subKey = j + 1;
        return {
          key: subKey,
          label: <Link to={`${day}/${subKey}`}>{`${day}/${subKey}`}</Link>,
        };
      }),
    };
  }
);
