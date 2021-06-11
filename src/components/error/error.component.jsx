import React from "react"
import PropTypes from "prop-types"

export const ErrorComponent = ({ errorMessage }) => {
  return errorMessage && <p>{errorMessage}</p>
}

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
}