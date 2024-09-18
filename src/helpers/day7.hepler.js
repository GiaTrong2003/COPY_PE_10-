import { Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";

// 1 method
export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - Number of rotation"
          name="countRotation"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"4"}
        >
          <Input />
        </Form.Item>,
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - Array"
          name="array"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"1 2 3 4 5"}
        >
          <Input />
        </Form.Item>,
      ];
    case "2":
      return [
        // Form fields for bai 2
        <Form.Item
          label="Bài 2"
          name="bai2"
          rules={[{ required: true, message: "Please input Bài 2!" }]}
          initialValue={"1 3 3 4 4"}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="field3"
          initialValue={`11  2   4
 4  5   6
10  8 -12`}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>,
      ];
    case "4":
      return [
        <>
          <Form.Item
            label="Bài 4 - String 1"
            name="string1"
            initialValue={"abc ab zhzc abc"}
            rules={[{ required: true, message: "Please input Bài 4!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bài 4 - String 2"
            name="string2"
            initialValue={"abc zhzc bc"}
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
          label="String"
          name="string5"
          initialValue={`1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0`}
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input.TextArea rows={10} />
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
      return {
        image: "image",
        link: "/assets/images/day7-1.png",
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day7-2.png",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day7-3.png",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day6-3.png",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day7-5.png",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};

export function hourglassSum(arr) {
  // Size is provided by the problem
  const SIZE = 6;

  function maxHourglass(arr) {
    if (Array.isArray(arr) && Array.isArray(arr[0])) {
      let sizeX = arr.length;
      let sizeY = arr[0].length;
      let max = -Infinity; // Initialize to the lowest possible value
      for (let i = 0; i < sizeX - 2; i++) {
        for (let j = 0; j < sizeY - 2; j++) {
          let hourglassSum = calcHourglass(arr, i, j);
          if (hourglassSum > max) max = hourglassSum;
        }
      }
      return max;
    }
    return 0; // Return 0 in case of invalid input
  }

  function calcHourglass(arr, x, y) {
    if (!Array.isArray(arr) || x + 2 >= arr.length || y + 2 >= arr[0].length)
      return 0;

    return (
      arr[x][y] +
      arr[x][y + 1] +
      arr[x][y + 2] +
      arr[x + 1][y + 1] +
      arr[x + 2][y] +
      arr[x + 2][y + 1] +
      arr[x + 2][y + 2]
    );
  }

  return maxHourglass(arr);
}

export const countString = (string1, string2) => {
  const map = new Map();
  let result = [];
  //
  string1.split(" ").forEach((element) => {
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  });
  //
  string2.split(" ").forEach((element) => {
    if (map.has(element)) {
      result.push(map.get(element));
    } else {
      result.push(0);
    }
  });

  return result.join(" ");
};

export const diagonalDifference = (matrix) => {
  console.log(matrix);
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    primaryDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][n - 1 - i];
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
};

export const maxCandle = (arr) => {
  if (Array.isArray(arr)) {
    let max = Math.max(...arr);
    console.log(max);
    let count = 0;
    arr.forEach((it) => {
      if (it == max) {
        count++;
      }
    });

    return count;
  }
};
export const leftRotation = (arr, countLeftRotation) => {
  for (let i = 0; i < countLeftRotation; i++) {
    if (Array.isArray(arr)) {
      const firstElement = arr.shift();
      arr.push(firstElement);
    }
  }

  return arr.join(" ");
};
