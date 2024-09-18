import { Form, Input } from "antd";

export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Field 1"
          name="field1"
          rules={[{ required: true, message: "Please input field 1!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "2":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Field 2"
          name="field2"
          rules={[{ required: true, message: "Please input field 2!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Field 3"
          name="field3"
          rules={[{ required: true, message: "Please input field 3!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "4":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Field 4"
          name="field4"
          rules={[{ required: true, message: "Please input field 4!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "5":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Field 5"
          name="field5"
          rules={[{ required: true, message: "Please input field 5!" }]}
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

export const getTopic = (bai) => {
  switch (bai) {
    case "1":
      return `
    Nếu n là số lẻ: In ra "Weird".
    <br />Nếu n là số chẵn và nằm trong khoảng từ 2 đến 5: In ra "Not Weird".
    <br />Nếu n là số chẵn và nằm trong khoảng từ 6 đến 20: In ra "Weird".
    <br />Nếu n là số chẵn và lớn hơn 20: In ra "Not Weird". '
    `;
    case "2":
      return `
      Cho 3 số nguyên a, b và n.
      <br />Ta cần tạo một dãy số có n phần tử, mỗi phần tử được tính theo công thức:
      <br />(a + 2^0 * b), (a + 2^0 * b + 2^1 * b), ..., (a + 2^0 * b + 2^1 * b + ... + 2^(n-1) * b)
      <h1>nhap theo FORMAT 'a b n' </h1>`;
    case "3":
      return `
      "Hai chuỗi ký tự, a và b, được gọi là anagram nếu chúng chứa tất cả các ký tự giống nhau với cùng tần suất xuất hiện.
      <br />Trong bài toán này, chúng ta không phân biệt chữ hoa và chữ thường.
      <br />Ví dụ, các anagram của chuỗi "CAT" là "CAT", "ACT", "tac", "TCA", "aTC" và "CtA"."`;
    case "4":
      return `
      <h4>Cho một chuỗi ký tự s, và hai chỉ số start và end. </h4>
      <h4>Yêu cầu bạn in ra một chuỗi con (substring) bao gồm tất cả các ký tự từ vị trí start đến vị trí end - 1 của chuỗi s.</h4>
      <h1>Nhập input theo FORMAT 'word start end'</h1>
    `;
    case "5":
      return `
      <h1>Kiểm tra chuỗi đảo ngược - palindrome</h1>
    `;

    default:
      return `
        Không có đề bài
     `;
  }
};


export const isPalindrome = (s) => {
    let reversedString = s.split('').reverse().join('');
    
    if (s === reversedString) {
        return "Yes"
    } else {
        return "No"
    }
}

export const sliceString = (string, start, end) => {
  return string.slice(start, end);
};

export const checkNumber = (n) => {
  if (n) {
    if (n % 2 !== 0) {
      return "Weird";
    } else if (n % 2 === 0 && n >= 2 && n <= 5) {
      return "Not Weird";
    } else if (n % 2 === 0 && n >= 6 && n <= 20) {
      return "Weird";
    } else if (n % 2 === 0 && n > 20) {
      return "Not Weird";
    }
  }

  return "Nhập linh tinh";
};

export const generateSeries = (a, b, n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    let sum = a;

    for (let j = 0; j <= i; j++) {
      sum += Math.pow(2, j) * b;
    }

    result.push(sum);
  }

  return result.join("    ");
};

export const printMultiplicationTable = (N) => {
  let arrMulti = [];
  for (let i = 1; i <= 10; i++) {
    arrMulti.push(`${N} x ${i} = ${N * i}`);
  }

  return arrMulti.join("<br />");
};
