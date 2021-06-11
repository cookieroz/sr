import React from "react"
import { Switch, Route } from "react-router-dom"
import { Grommet } from "grommet"

import { ReviewsList } from "./components/reviews/reviews-list"
import { ReviewItem } from "./components/reviews/review-item"
import { ReviewsContextProvider } from "./components/reviews"

function App() {
  return (
    <Grommet className="App" plain>
      <Switch>
        <ReviewsContextProvider>
          <Route exact path="/" component={ReviewsList} />
          <Route path="/reviews/:id" component={ReviewItem} />
        </ReviewsContextProvider>
      </Switch>
    </Grommet>
  )
}

export default App
