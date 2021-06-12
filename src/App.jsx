import React from "react"
import { Switch, Route } from "react-router-dom"
import { Box, Grid, Grommet } from "grommet"

import { ReviewsList } from "./components/reviews/reviews-list"
import { ReviewItem } from "./components/reviews/review-page"
import { ReviewsContextProvider } from "./components/reviews"

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
        pad="medium"
        rows={["xxsmall", "auto"]}
      >
        <Box gridArea="header" background="brand" />
        <Box gridArea="main" background="light-2">
          <ReviewsContextProvider>
            <Switch>
              <Route exact path="/" component={ReviewsList} />
              <Route path="/reviews/:id" component={ReviewItem} />
            </Switch>
          </ReviewsContextProvider>
        </Box>
      </Grid>
    </Grommet>
  )
}

export default App
