import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
      staleTime: 1000 * 60 * 1, // 1분 후 데이터는 "stale"로 처리
    },
  },
});

export default queryClient;
