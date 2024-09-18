import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";

// 1 method
export const getFormFields = (bai) => {
  switch (bai) {
    case "1":
      return [
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - List1"
          name="list1"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"1 2 3"}
        >
          <Input />
        </Form.Item>,
        // Form fields for bai 1
        <Form.Item
          label="Bài 1 - List2"
          name="list2"
          rules={[{ required: true, message: "Please input Bài 1!" }]}
          initialValue={"2 3 4"}
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
          initialValue={"1 2 2 3 3 4"}
        >
          <Input />
        </Form.Item>,
      ];
    case "3":
      return [
        <Form.Item
          label="Bài 3"
          name="field3"
          initialValue={"abc ab zhzc abc"}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
        >
          <Input />
        </Form.Item>,
        // Form fields for bai 2
        <Form.Item
          label="Bài 3.1"
          name="field3.1"
          initialValue={"abc zhzcm bc"}
          rules={[{ required: true, message: "Please input Bài 3!" }]}
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
          label="String"
          name="string"
          initialValue={'abcde'}
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input />
        </Form.Item>,
        <Form.Item
          label="Selection"
          name="selection"
          initialValue={'1 fg, 3 6, 2 5, 4, 3 7, 4, 3 4'}
          rules={[{ required: true, message: "Please input Bài 5!" }]}
        >
          <Input />
        </Form.Item>
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
        link: "/assets/images/day6-1.png",
      };
    case "2":
      return {
        image: "image",
        link: "/assets/images/day6-2.png",
      };
    case "3":
      return {
        image: "image",
        link: "/assets/images/day6-3.png",
      };
    case "4":
      return {
        image: "image",
        link: "/assets/images/day6-4.png",
      };
    case "5":
      return {
        image: "image",
        link: "/assets/images/day6-5.png",
      };

    default:
      return `
        Không có đề bài
     `;
  }
};
