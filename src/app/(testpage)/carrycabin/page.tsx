"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/testpage/test.module.scss";
import Swal from "sweetalert2"; // Import SweetAlert2

const Page: React.FC = () => {
  const [name, setName] = useState<string>(""); // State for the name
  const [email, setEmail] = useState<string>(""); // State for the phone number

  const handleSearch = async () => {
    if (!name || !email) {
      Swal.fire({
        icon: "error",
        title: "입력 오류",
        text: "이름과 번호를 모두 입력해 주세요.",
      });
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/carrycabin/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      }
    );
    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "completed!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "서버 오류",
        text: "서버에 문제가 발생했습니다. 나중에 다시 시도해 주세요.",
      });
    }
  };

  return (
    <main className={styles.container6}>
      <img src="/dummy/carrycabin.png" alt="Logo" className={styles.logo6} />
      <div className={styles.searchBarContainer6}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className={styles.form6}
        >
          <div className={styles.inputGroup6}>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input7}
              placeholder="name"
              required
            />
          </div>
          <div className={styles.inputGroup6}>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input6}
              placeholder="email"
              required
            />
          </div>
          <button onClick={handleSearch} className={styles.searchButton6}>
            Apply now
          </button>
        </form>
      </div>
      <div className={styles.detail6}>
        When you arrive at the airport, we will deliver your luggage directly to
        your hotel. Enjoy a comfortable trip with us!
      </div>
    </main>
  );
};

export default Page;
