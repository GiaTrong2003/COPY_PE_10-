import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";

// 1 method
export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1"
          name="field1"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"I love Love to To to code"}
        >
          <Input />
        </Form.Item>,
      ];
    case "2":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 2"
          name="field2"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 3 - Ranked"
          name="field3"
          rules={[{ required: true, message: "Please input Bài 3!" }]}
          initialValue={"100 100 50 40 40 20 10"}
        >
          <Input />
        </Form.Item>,
        // Form fields for bai 2
        <Form.Item
          label="Bài 3.1 - Player"
          name="field3.1"
          rules={[{ required: true, message: "Please input Bài 3!" }]}
          initialValue={"5 25 50 120"}
        >
          <Input />
        </Form.Item>,
      ];
    case "4":
      return [
        <>
          <Form.Item
            label="Select bài toán"
            name="select"
            rules={[{ required: true, message: "Please select an option!" }]}
          >
            <Select placeholder="Select number type">
              <Option value="1">EVEN OR ODD</Option>
              <Option value="2">PRIME</Option>
              <Option value="3">PALINDROME OR COMPOSITE</Option>
            </Select>
          </Form.Item>
          {/* // Form fields for bai 2 */}
          <Form.Item
            label="Bài 4"
            name="field4"
            rules={[{ required: true, message: "Please input Bài 4!" }]}
          >
            <Input />
          </Form.Item>
        </>,
      ];
    case "5":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 5 - Bill"
          name="bill"
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Bài 5 - Cost"
          name="cost"
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Bài 5 - moneyWillPay"
          name="moneyWillPay"
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    default:
      return [
        // Default form fields
        <Form.Item
          label="Default Field"
          name="defaultField"
          rules={[{ required: true, message: "Please input default field!" }]}
        >
          <Input />
        </Form.Item>,
      ];
  }
};

// 1 method
export const getTopic = (bai) => {
  switch (bai) {
    case "1":
      return `
      <h4>Chúng ta có một đoạn văn bản và muốn loại bỏ các từ lặp lại nhiều lần, chỉ giữ lại lần xuất hiện đầu tiên của từ đó. Quan trọng hơn, việc so sánh từ ở đây không phân biệt chữ hoa chữ thường.

    <br />Ví dụ: trong câu "I love Love to To to code", các từ "love" và "to" xuất hiện nhiều lần. Chúng ta muốn loại bỏ các lần xuất hiện sau và chỉ giữ lại "I love to code".

    </h4>
    `;
    case "2":
      return {
        image: "image",
        link: "/assets/images/day5-2.png",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day5-3.png",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day5-4.png",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day5-bai5.jpg",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};

// console.log(getTopic("4"))
export const splitBill = (bill, cost, moneyWillPay) => {
  let annaDeclines = parseInt(cost[bill[1]]);
  let sumCost = cost.reduce((initialValue, currentValue) => {
    return initialValue + parseInt(currentValue);
  }, 0);

  console.log((sumCost - annaDeclines) / 2, moneyWillPay);

  return Math.abs((sumCost - annaDeclines) / 2 - moneyWillPay) == 0
    ? "Bon Appetit"
    : Math.abs((sumCost - annaDeclines) / 2 - moneyWillPay);
};

export const denseRanking = (ranked, player) => {
  let result = [];
  const newRanked = newRank(ranked);

  for (let i = 0; i < player.length; i++) {
    result.push(findIndexNhaLam(parseInt(player[i]), newRanked));
  }

  return result.join(" ");
};

const findIndexNhaLam = (score, newRanked) => {
  // let result = 0;
  // let flag = false;

  // newRanked.forEach((element, index) => {
  //   if (score >= element && !flag) {
  //     result = ++index;
  //     flag = true;
  //   }
  // });

  // if (result == 0) {
  //   let index = newRanked.length;
  //   result = ++index;
  // }

  // return result;

  // rút gọn lại

  // for (let i = 0; i < newRanked.length; i++) {
  //   if (score >= newRanked[i]) {
  //     return i + 1;
  //   }
  // }
  // return newRanked.length + 1;

  // rút gọn lại nữa
  let index = newRanked.findIndex(element => score >= element);
  return index === -1 ? newRanked.length + 1 : index + 1;
};

const newRank = (ranked) => {
  // let result = [];
  // let set = new Set();

  // ranked.forEach((it) => {
  //   set.add(it);
  // });

  // set.forEach((it) => {
  //   result.push(parseInt(it));
  // });

  // TỐI ƯU
  const result = Array.from(
    new Set(ranked.map((it) => parseInt(it)).filter((it) => !isNaN(it)))
  );

  return result;
};

export const lamdaExpression = (select, number) => {
  switch (select) {
    case "1":
      return checkEvenOrOdd(number);
    case "2":
      return checkPrime(number) ? "PRIME" : "COMPOSITE";
    case "3":
      return checkPALINDROME(number) ? "PALINDROME" : "NOT PALINDROME";
    default:
      break;
  }
};

const checkPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};

const checkEvenOrOdd = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};

const checkPALINDROME = (n) => {
  const str = n.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

export const aVeryBigSum = (string) => {
  return string.split(" ").reduce((initialValue, element) => {
    return initialValue + Number(element);
  }, 0);
};

export const removeInstanceOfWord = (string) => {
  let map = new Map();

  string.split(" ").forEach((element) => {
    if (!map.has(element.toLowerCase())) {
      map.set(element.toLowerCase(), element);
    }
  });

  let result = [];
  map.forEach((value, key) => {
    // console.log(key, value)
    result.push(value);
  });

  return result.join(" ");
};

export const removeInstanceOfWordV2 = (string) => {
  const regex = /(\b\w+\b)(?=.*\b\1\b)/gi;

  const matches = string.matchAll(regex);

  const firstOccurrences = {};

  for (const match of matches) {
    firstOccurrences[match[1].toLowerCase()] = match[1];
  }

  const result = string.replace(
    regex,
    (match) => firstOccurrences[match.toLowerCase()]
  );

  return result;
};
