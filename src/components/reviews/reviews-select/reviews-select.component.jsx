import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, Select } from "grommet"

export const ReviewsSelect = ({ title, options = [], onSelectChange }) => (
  <Box width="small">
    {title && (
      <Heading level="4" margin={{ bottom: "small" }}>
        {title}
      </Heading>
    )}
    <Select options={options} onChange={onSelectChange} clear />
  </Box>
)

ReviewsSelect.propTypes = {
  options: PropTypes.array,
  onSelectChange: PropTypes.func,
  title: PropTypes.string,
}
