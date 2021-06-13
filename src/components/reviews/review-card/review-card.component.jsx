import React, { useState } from "react"
import PropTypes from "prop-types"
import { Avatar, Box, Grid, Text } from "grommet"

import { formatReviewDate } from "../../../utils"
import { StarRating } from "../../star-rating"
import { UserExpert } from "grommet-icons"

export const ReviewCard = ({
  author,
  body,
  publish_date: publishDate,
  rating,
}) => {
  const borderStyle = {
    color: "border",
    side: "bottom",
  }

  const reviewDate = formatReviewDate(publishDate)
  const [truncateText, setTruncateText] = useState(true)
  const toggleText = () => setTruncateText(!truncateText)

  return (
    <Grid
      areas={[
        { name: "side", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] },
      ]}
      columns={["25%", "auto"]}
      border={borderStyle}
      fill="horizontal"
      gap="small"
      pad="medium"
      rows={["auto"]}
    >
      <Box
        gridArea="side"
        align="center"
        alignContent="center"
        justify="center"
        pad="medium"
      >
        <Avatar background="dark-2">
          <UserExpert color="accent-1" />
        </Avatar>
        <h6>{author}</h6>
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
        <Text margin="small" truncate={truncateText} onClick={toggleText}>
          {body}
        </Text>
      </Box>
    </Grid>
  )
}

ReviewCard.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  publish_date: PropTypes.string,
  rating: PropTypes.number,
}
