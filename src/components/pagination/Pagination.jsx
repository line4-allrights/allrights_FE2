import * as React from "react";
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

export default function PaginationIcon() {
  return (
    <S.PaginationMargin>
      <ThemeProvider theme={theme}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Pagination
            count={10}
            size="medium"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
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
