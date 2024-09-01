"use client";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import styles from "../app/page.module.css";

export default function Reveal({ gender, onReveal }) {
  const [value, setValue] = useState("");
  const [showBtn, setShowBtn] = useState(true);
  const onClick = () => {
    if (gender) {
      setValue(value);
      onReveal(true);
      setShowBtn(false);
    }
  };
  useEffect(() => {}, [value]);

  return (
    <div className={styles.revealBtn}>
      {showBtn && (
        <Button type="button" onClick={onClick}>
          Click to Reveal
        </Button>
      )}
    </div>
  );
}
