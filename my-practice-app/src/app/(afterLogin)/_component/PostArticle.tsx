"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    createdAt: Date;
    Images: any[];
    User: {
      id: string;
      nickname: string;
      image: string;
    };
  };
};

export default function PostArticle({ children, post }: Props) {
  // next/navigation
  const router = useRouter();
  const onClick = () => {
    // 경로이동
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article className={style.article} onClickCapture={onClick}>
      {children}
    </article>
  );
}
