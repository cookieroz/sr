import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import { Box, Paragraph } from "grommet"
// import {Box, Card, CardBody, CardHeader, Paragraph} from "grommet"

import { formatReviewDate } from "../../../utils"
import { StarRating } from "../../star-rating"

export const ReviewCard = ({
  author,
  id,
  publish_date: publishDate,
  rating,
}) => {
  const history = useHistory()
  const reviewPath = `reviews/${id}`
  const reviewDate = formatReviewDate(publishDate)
  const goToReview = () => history.push(reviewPath)

  return (
    <Box pad="small" onClick={goToReview}>
      {rating && <StarRating rating={rating} />}
      <Paragraph pad="small" margin="none">{`author: ${author}`}</Paragraph>
      <Paragraph pad="small" margin="none">{`date: ${reviewDate}`}</Paragraph>
    </Box>
  )

  // return (
  //   <Box  onClick={goToReview}>
  //     {rating && <StarRating rating={rating} />}
  //     {`author: ${author}`}
  //     {`date: ${reviewDate}`}
  //   </Box>
  //   <Card  pad="small">
  //     <CardHeader pad="medium">Header</CardHeader>
  //     <CardBody pad="medium">Body</CardBody>
  //     <CardFooter pad={{horizontal: "small"}} background="light-2">
  //       <Button
  //         icon={<Icons.Favorite color="red" />}
  //         hoverIndicator
  //       />
  //       <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
  //     </CardFooter>
  //   </Card>
  // )
}

ReviewCard.propTypes = {
  author: PropTypes.string,
  id: PropTypes.string,
  publish_date: PropTypes.string,
  rating: PropTypes.number,
}
