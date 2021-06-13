import React from "react"
import PropTypes from "prop-types"
import { Select } from "grommet"

export const ReviewsSelect = ({ options = [], onSelectChange }) => (
  <Select options={options} onChange={onSelectChange} />
)

ReviewsSelect.propTypes = {
  options: PropTypes.array,
  onSelectChange: PropTypes.func,
}
