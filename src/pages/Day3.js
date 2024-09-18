import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  checkNumber,
  generateSeries,
  getFormFields,
  getTopic,
  isPalindrome,
  printMultiplicationTable,
  sliceString,
} from "../helpers/day3.helper";

function Day3() {
  const { bai } = useParams();
  const [form] = Form.useForm();
  const [result, setResult] = useState(null);

  // change result when i changed
  useEffect(() => {
    setResult(null);
  }, [bai]);

  // Solve topic
  let onFinish;
  try {
    onFinish = (values) => {
      console.log(values);
      switch (bai) {
        case "1":
          setResult(checkNumber(parseInt(values[`field1`])));
          break;
        case "2":
          const [a, b, n] = values[`field2`].split(" ");
          setResult(generateSeries(parseInt(a), parseInt(b), parseInt(n)));
          break;
        case "3":
          setResult(printMultiplicationTable(parseInt(values[`field3`])));
          break;
        case "4":
          const [word, start, end] = values[`field4`].split(" ");
          console.log([word, start, end]);
          setResult(sliceString(word, parseInt(start), parseInt(end)));
          break;
        case "5":
          setResult(isPalindrome(values[`field5`]));
          break;
        default:
          break;
      }
    };
  } catch (error) {
    setResult("Nhập linh tinh à");
  }

  return (
    <>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h1>Topic</h1>

        {/* Topic */}
        <div dangerouslySetInnerHTML={{ __html: getTopic(bai) }} />
        
        {/*  */}
        {getFormFields(bai)}

        {/*  */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Solve
          </Button>
        </Form.Item>
      </Form>

      <h4>Đáp án</h4>
      {/* <h3 id="result">{result}</h3> */}
      <h2 dangerouslySetInnerHTML={{ __html: result }} />
    </>
  );
}

export default Day3;
