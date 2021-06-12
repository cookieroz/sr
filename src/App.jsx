import React from "react"
import { Box, Grid, Grommet } from "grommet"

import { ReviewsList } from "./components/reviews/reviews-list"
import { ReviewsContextProvider } from "./components/reviews"
import { Header } from "./components/header"

function App() {
  return (
    <Grommet className="App" plain>
      <Grid
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "main", start: [0, 1], end: [1, 1] },
        ]}
        columns={["auto"]}
        fill="horizontal"
        gap="small"
        rows={["xxsmall", "auto"]}
      >
        <Header />
        <Box gridArea="main" pad="medium">
          <ReviewsContextProvider>
            <ReviewsList />
          </ReviewsContextProvider>
        </Box>
      </Grid>
    </Grommet>
  )
}

export default App
