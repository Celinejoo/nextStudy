"use client";

import style from "../search.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// serach의 Tab은 주소가 바뀜
// 디자인이 같아도 역할이 다르므로 다른 컴포넌트로 생성

export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  // searchParams을 받아오는 방법은 두가지가 있는데
  // 1. props로 넘겨받는다.
  // 2. useSearchParams()로 받는다.

  const searchParams = useSearchParams();

  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };

  const onClickNew = () => {
    setCurrent("new");
    // ?f=live
    // searchParams.toString() : 현재 searchParams 그대로 다 써라
    // 지금 있는거 다 쓰고 하나 더 추가 할 때 사용한다.
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}
