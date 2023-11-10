import React, { useState, useEffect } from 'react';
import * as S from "./style";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        text: {
          color: "#BFC5D0",
        },
      },
    },
  },
});

export default function PaginationIcon({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    // data가 유효한 경우에만 계산 수행
    if (data) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const newCurrentData = data.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentData(newCurrentData);
    }
  }, [currentPage, data]); // currentPage 또는 data가 변경될 때마다 실행

  // 총 페이지 수 계산
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  return (
    <S.PaginationMargin>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          {currentData.map(item => (
            <div key={item.id}>
              {/* 여기에 각 항목을 렌더링하는 코드 */}
            </div>
          ))}
          <Pagination
            count={totalPages}
            size="medium"
            page={currentPage}
            onChange={(e, page) => setCurrentPage(page)}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
                color="primary"
              />
            )}
          />
        </Stack>
      </ThemeProvider>
    </S.PaginationMargin>
  );
}

