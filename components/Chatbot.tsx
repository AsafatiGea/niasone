"use client";

import { useState } from "react";
import styles from "./chatbot.module.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>(["Ya'ahowu 👋"]);

  const sendMessage = () => {
    if (!message) return;

    setChat([...chat, message, "Ini jawaban AI (dummy dulu ya 🤖)"]);
    setMessage("");
  };

  return (
    <div>
      {/* BUTTON */}
      <button className={styles.chatButton} onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <span>Nias Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className={styles.chatBody}>
            {chat.map((msg, i) => (
              <div key={i}>{msg}</div>
            ))}
          </div>

          <div className={styles.chatFooter}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik pesan..."
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
}
