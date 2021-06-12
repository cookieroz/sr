import React from "react"
import PropTypes from "prop-types"
import { Box, Button, Grid, Text } from "grommet"

import { formatReviewDate } from "../../../utils"
import { StarRating } from "../../star-rating"
import { useHistory } from "react-router-dom"

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
    <Grid
      areas={[
        { name: "side", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] },
      ]}
      columns={["1/4", "3/4"]}
      fill="horizontal"
      gap="small"
      pad="medium"
      rows={["auto"]}
    >
      <Box gridArea="side" pad="medium">
        <Box pad="small">
          <Button primary label="back" size="small" onClick={goBack} />
        </Box>
        <Box pad="small">
          <h6>{author}</h6>
        </Box>
      </Box>
      <Box gridArea="main" pad="medium">
        <Box
          alignContent="center"
          direction="row"
          justify="between"
          pad="small"
        >
          <StarRating justify="start" rating={rating} />
          <Text
            alignSelf="center"
            color="dark-3"
            margin="none"
            size="small"
            textAlign="end"
          >
            {reviewDate}
          </Text>
        </Box>
        <Text margin="small">{body}</Text>
      </Box>
    </Grid>
  )
}

ReviewPageComponent.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  publish_date: PropTypes.string,
  rating: PropTypes.number,
}
