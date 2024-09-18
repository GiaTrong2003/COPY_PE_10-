import { Form, Input } from "antd";

export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1"
          name="field1"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
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
          label="Bài 3"
          name="field3"
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "4":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 4"
          name="field4"
          rules={[{ required: true, message: "Please input Bài 4!" }]}
        >
          <Input />
        </Form.Item>,
      ];
    case "5":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 5"
          name="field5"
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

export const getTopic = (bai) => {
  switch (bai) {
    case "1":
      return `
      Cho một chuỗi ký tự s được viết theo kiểu CamelCase. CamelCase là một quy tắc viết tên biến hoặc hàm trong lập trình, trong đó:
    <br />Từ đầu tiên viết hoàn toàn bằng chữ thường.
    <br />Các từ tiếp theo, chữ cái đầu viết hoa và các chữ cái còn lại viết thường.
    '
    `;
    case "2":
      return `
      <br />Tính tổng dãy số nhập vào
      <h1>Input theo Format ' 1 2 3 4 ...... '</h1> `;
    case "3":
      return `
      <p>Two strings, a and b, are called anagrams if<br>
they contain all the same characters in the<br>
same frequencies. For this challenge, the test<br>
is not case-sensitive. For example, the<br>
anagrams of CAT are CAT, ACT, tac, TCA,<br>
aTC, and CtA.</p>
    <h1>Chỉ nhập 2 String</h1>`;
    case "4":
      return `Cho một số nguyên dương n. Nhiệm vụ của bạn là viết một chương trình in ra một hình thang có kích thước n x n như hình minh họa. 
      <br />Hình thang này được tạo thành từ các ký tự # và khoảng trắng, với số lượng ký tự # tăng dần ở mỗi dòng, bắt đầu từ 1 ở dòng đầu tiên và kết thúc bằng n ký tự ở dòng cuối cùng.
    <br />Ví dụ:
    <br />Với n = 4, hình thang sẽ có dạng:
    <br />#
    <br />##
    <br />###
    <br />####
    `;
    case "5":
      return `
      <h1>Kiểm tra số nguyên tố - Prime</h1>
    `;

    default:
      return `
        Không có đề bài
     `;
  }
};

export const isPrime = (n) => {
  if (n <= 1) return "not prime";

  if (n <= 3) return "prime";

  if (n % 2 === 0 || n % 3 === 0) return "not prime";

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return "not prime";
  }

  return "prime";
};

export const drawPyramid = (rows) => {
  let result = "";

  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 0; j < rows - i; j++) {
      line += " ";
    }

    for (let k = 0; k < i; k++) {
      line += "#";
    }

    result += line + "\n";

    console.log(result);
  }

  return result;
};

export const checkAnagram = (string1, string2) => {
  if (string1.length != string2.length) {
    return "Not Anagrams";
  }

  let arr = Array(256).fill(0);

  string1.split("").forEach((character) => {
    arr[character.toLowerCase().charCodeAt(0)]++;
  });

  string2.split("").forEach((character) => {
    arr[character.toLowerCase().charCodeAt(0)]--;
  });

  let flag = 1;
  arr.forEach((it) => {
    if (it != 0) {
      flag = 0;
    }
  });

  return flag == 1 ? "Anagrams" : "Not Anagrams";
};

export const countArray = (array) => {
  return array.reduce((initialValue, item) => {
    return initialValue + parseInt(item);
  }, 0);

  return;
};

export const countCampleCase = (string) => {
  let count = 1;

  string.split("").forEach((item) => {
    if (item.toUpperCase() == item) {
      count++;
    }
  });

  return count;
};
