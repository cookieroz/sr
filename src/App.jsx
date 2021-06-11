import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"
import { ReviewsList } from "./components/reviews/reviews-list"
import { ReviewItem } from "./components/reviews/review-item"
import { ReviewsContextProvider } from "./components/reviews"

function App() {
  return (
    <div className="App">
      <Switch>
        <ReviewsContextProvider>
          <Route exact path="/" component={ReviewsList} />
          <Route path="/reviews/:id" component={ReviewItem} />
        </ReviewsContextProvider>
      </Switch>
    </div>
  )
}

export default App
