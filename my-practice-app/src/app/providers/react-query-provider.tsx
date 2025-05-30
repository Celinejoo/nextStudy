// 'use client'는 이 파일이 브라우저에서 실행된다는 뜻!
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

// children: 이 Provider가 감싸고 있는 애들 (페이지 전체)
export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  // QueryClient(요청/캐시 관리)를 한 번만 만들고 저장!
  const [queryClient] = useState(() => new QueryClient());

  // 감싸서 전체 앱에서 react-query를 쓸 수 있게 함!
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
