// PaginatedMusicList.jsx
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

const PaginatedMusicList = () => {
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = Array.isArray(musicData)
    ? musicData.slice(startIndex, endIndex)
    : [];

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
            <div key={item.id}></div>
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
};

export default PaginatedMusicList;
