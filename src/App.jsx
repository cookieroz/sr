import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.css'
import { ReviewsList } from "./components/reviews/reviews-list";
import { ReviewItem } from "./components/reviews/review-item";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ReviewsList} />
        <Route path="/reviews/:id" component={ReviewItem} />
      </Switch>
    </div>
  )
}

export default App
