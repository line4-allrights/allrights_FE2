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

  // 전체 페이지 수 계산
  const count = Math.ceil(data.length / itemsPerPage);

  // 페이지 변경시 데이터 업데이트
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentData(data.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, data]);

  return (
    <S.PaginationMargin>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          {/* 현재 페이지에 해당하는 데이터를 렌더링 */}
          {currentData.map(item => (
            <div key={item.id}>{/* 데이터 항목 렌더링 */}</div>
          ))}
          <Pagination
            count={count}
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
