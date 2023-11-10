import React, { useState, useEffect } from "react";
import * as S from "./style";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { API } from "../../api/axios";

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

export default function PaginatedMusicList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await API.get("http://127.0.0.1:8000/music/");
        setMusicData(response.data);
      } catch (error) {
        console.error("음악 데이터를 가져오는 중 에러 발생:", error);
      }
    };

    fetchMusicData();
  }, []);

  // 현재 페이지에 해당하는 음악 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = musicData.slice(indexOfFirstItem, indexOfLastItem);

  // 전체 페이지 수 계산
  const totalPages = musicData ? Math.ceil(musicData.length / itemsPerPage) : 0;

  return (
    <S.PaginationMargin>
      <ThemeProvider theme={theme}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {currentData.map((item) => (
            <div key={item.id}>{/* 여기에 각 항목을 렌더링하는 코드 */}</div>
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
