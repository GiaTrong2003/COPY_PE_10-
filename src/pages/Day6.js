import { Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LinkedList, merge } from "../helpers/linkedList.helper";
import { countString, getFormFields, getTopic, textEditor } from "../helpers/day6helper";

function Day6() {
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
          const list1 = values[`list1`].split(" ");
          const list2 = values[`list2`].split(" ");

          const linkedlist1 = new LinkedList();
          const linkedlist2 = new LinkedList();

          // add value in list1
          list1.forEach((it) => {
            linkedlist1.add(parseFloat(it));
          });
          // add value in list1
          list2.forEach((it) => {
            linkedlist2.add(parseFloat(it));
          });
          //
          setResult(merge(linkedlist1, linkedlist2));
          break;
        case "2":
          const list3 = values[`field2`].split(" ");
          const linkedlist3 = new LinkedList();
          // add value in list1
          list3.forEach((it) => {
            linkedlist3.add(parseFloat(it));
          });

          console.log(linkedlist3.getList())

          setResult(linkedlist3.distinctNode());
          break;
        case "3":
          setResult(countString(values[`field3`], values[`field3.1`]));
          break;
        case "4":
          break;
        case "5":
          setResult(textEditor(values[`string`], values[`selection`].split(", ")));
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

        <div>
          <img
            style={{ width: "100%", marginBottom: "30px" }}
            src={getTopic(bai).link}
            alt={getTopic(bai).image}
          />
        </div>

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

export default Day6;
