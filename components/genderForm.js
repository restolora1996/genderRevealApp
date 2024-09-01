"use client";

import React, { useState } from "react";
import { Button, Form, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import styles from "../app/page.module.css";

export default function GenderForm({ handleSubmit }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <>
      <div className={styles.genderForm}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <div>
            <h1>What's the gender?</h1>
            <p>
              The moment of truth! Please fill in the gender of the baby. You
              can either fill in the gender yourself.
            </p>
          </div>
          <FormItem
            wrapperCol={{ offset: 0, span: 24 }}
            label="Select Gender"
            name="gender"
            layout="vertical"
            rules={[
              {
                required: true,
                message: "Please select gender",
              },
            ]}
          >
            <Select
              placeholder="Please select a gender"
              style={{
                width: "100%",
              }}
              onChange={handleChange}
              options={[
                { value: "Male", label: <span>Male</span> },
                { value: "Female", label: <span>Female</span> },
              ]}
            />
          </FormItem>
          <FormItem wrapperCol={{ span: 24 }}>
            <Button
              className={styles.submitBtn}
              type="primary"
              htmlType="button"
              onClick={() => handleSubmit(value)}
            >
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    </>
  );
}
