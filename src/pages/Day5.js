import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  aVeryBigSum,
  denseRanking,
  getFormFields,
  getTopic,
  lamdaExpression,
  removeInstanceOfWord,
  splitBill,
} from "../helpers/day5.helper";

function Day5() {
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
          setResult(removeInstanceOfWord(values[`field1`]));
          break;
        case "2":
          setResult(aVeryBigSum(values[`field2`]));
          break;
        case "3":
          const ranked = values[`field3`].split(" ")
          const player = values[`field3.1`].split(" ")
          // console.log(ranked, player)
          setResult(denseRanking(ranked, player));
          break;
        case "4":
          setResult(lamdaExpression(values.select, parseInt(values.field4)));
          break;
        case "5":
          const bill = values[`bill`].split(" ");
          const cost = values[`cost`].split(" ");
          const moneyWillPay = values[`moneyWillPay`];
          setResult(splitBill(bill, cost, parseInt(moneyWillPay)));
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

        {getTopic(bai).image == "image" ? (
          <div>
            <img style={{width: "100%", marginBottom: "30px"}} src={getTopic(bai).link} alt={getTopic(bai).image} />
          </div>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: getTopic(bai) }} />
          </>
        )}

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

export default Day5;
