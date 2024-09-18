import { Form, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  checkAnagram,
  countArray,
  countCampleCase,
  drawPyramid,
  getFormFields,
  getTopic,
  isPrime,
} from "../helpers/day4.helper";

function Day4() {
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
          setResult(countCampleCase(values[`field1`]));
          break;
        case "2":
          const array = values[`field2`]?.split(" ");
          setResult(countArray(array));
          break;
        case "3":
          const [string1, string2] = values[`field3`]?.split(" ");
          console.log(string1, string2);

          setResult(checkAnagram(string1, string2));
          break;
        case "4":
          setResult(drawPyramid(parseInt(values[`field4`])));
          break;
        case "5":
          setResult(isPrime(parseInt(values[`field5`])));
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

        <div dangerouslySetInnerHTML={{ __html: getTopic(bai) }} />
        {getFormFields(bai)}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Solve
          </Button>
        </Form.Item>
      </Form>

      <h4>Đáp án</h4>
      {/* <h3 id="result">{result}</h3> */}
      {bai == 4 ? (
        <>
          <pre>{result}</pre>
        </>
      ) : (
        <>
          <h2 dangerouslySetInnerHTML={{ __html: result }} />
        </>
      )}
    </>
  );
}

export default Day4;
