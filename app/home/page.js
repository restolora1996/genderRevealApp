import React from "react";
import { Button } from "antd";
import styles from "../page.module.css";
import Video from "../../components/video";

export default function Homepage() {
  return (
    <div>
      <Video src="/GenderReveal.mp4" />
      <div className={styles.revealBtn}>
        <Button>Click to Reveal</Button>
      </div>
    </div>
  );
}
