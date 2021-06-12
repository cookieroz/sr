import React from "react"
import PropTypes from "prop-types"
import {Box, Button} from "grommet"

import { formatReviewDate } from "../../../utils"
import { StarRating } from "../../star-rating"
import { useHistory } from "react-router-dom";

export const ReviewPageComponent = ({
  author,
  body,
  publish_date: publishDate,
  rating,
}) => {
  const history = useHistory()
  const reviewDate = formatReviewDate(publishDate)
  const goBack = () => history.goBack()

  return (
    <Box pad="medium">
      <Box pad="small">
        <Button primary label="back" size="small" onClick={goBack} />
      </Box>
      <Box pad="medium" direction="row">
        <Box pad="small">
          <h3>{`${author} rated it: `}</h3>
          <StarRating rating={rating} />
        </Box>
        <Box pad="small">
          <h3>{`Review on ${reviewDate}: `}</h3>
          <p>{body}</p>
        </Box>
      </Box>
    </Box>
  )
}

ReviewPageComponent.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  publish_date: PropTypes.string,
  rating: PropTypes.number,
}
