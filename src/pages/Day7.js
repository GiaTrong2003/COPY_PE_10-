import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  countString,
  diagonalDifference,
  getFormFields,
  getTopic,
  hourglassSum,
  leftRotation,
  maxCandle,
} from "../helpers/day7.hepler";

function Day7() {
  const { bai } = useParams();
  const [form] = Form.useForm();
  const [result, setResult] = useState(null);
  const [time, setTime] = useState(null);

  // Reset result when bai changes
  useEffect(() => {
    setResult(null);
    setTime(null);
  }, [bai]);

  // Solve topic
  let onFinish;
  try {
    onFinish = (values) => {
      console.log(values);

      // Đo thời gian thực thi
      console.time("Execution Time");
      
      let resultTemp;
      switch (bai) {
        case "1":
          resultTemp = leftRotation(values[`array`].split(" "), values[`countRotation`]);
          break;
        case "2":
          resultTemp = maxCandle(values[`bai2`].split(" "));
          break;
        case "3":
          const inputArr2D = values[`field3`].split("\n");
          const convertArr2D = inputArr2D.map((row) => {
            return row.trim().split(/\s+/).map(Number); // tách và chuyển các phần tử thành Number
          });
          resultTemp = diagonalDifference(convertArr2D);
          break;
        case "4":
          resultTemp = countString(values[`string1`], values[`string2`]);
          break;
        case "5":
          const inputArr = values[`string5`].split("\n");
          const convertArr2 = inputArr.map((row) => {
            return row.trim().split(/\s+/).map(Number); // tách và chuyển các phần tử thành Number
          });
          resultTemp = hourglassSum(convertArr2);
          break;
        default:
          resultTemp = "Invalid topic!";
          break;
      }

      // Đo thời gian kết thúc
      console.timeEnd("Execution Time");

      // Tính thời gian thực thi
      const elapsedTime = console.timeLog ? console.timeLog("Execution Time") : null;

      setResult(resultTemp);
      setTime(elapsedTime);
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

        <div>
          <img
            style={{ width: "100%", marginBottom: "30px" }}
            src={getTopic(bai).link}
            alt={getTopic(bai).image}
          />
        </div>

        {/* Render form fields */}
        {getFormFields(bai)}

        {/* Submit button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Solve
          </Button>
        </Form.Item>
      </Form>

      <h4>Đáp án</h4>
      <h2 dangerouslySetInnerHTML={{ __html: result }} />
      {time && <p>Time taken: {time} ms</p>}
    </>
  );
}

export default Day7;
