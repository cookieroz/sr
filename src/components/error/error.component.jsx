import React from "react"
import PropTypes from "prop-types"
import { Paragraph } from "grommet"

export const ErrorComponent = ({ errorMessage }) => {
  return errorMessage ? (
    <Paragraph color="status-error">{errorMessage}</Paragraph>
  ) : null
}

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
}
