"use client";
import styles from "./main.module.css";
import Link from "next/link";
import Image from "next/image";
import zLogo from "./../../../../public/zlogo.png";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        {/* <img> 대신 <Image/> 태그 사용 */}
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>

        {/* a 태그는 새로고침이 되기 때문에 Link를 써줘야함  */}
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
