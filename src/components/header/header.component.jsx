import React from "react"
import PropTypes from "prop-types"
import { Box, Heading } from "grommet"
import { Book } from "grommet-icons"

export const Header = ({
  background = "dark-2",
  headingColor = "accent-1",
}) => (
  <Box
    align="center"
    background={background}
    direction="row"
    fill="horizontal"
    gridArea="header"
    height="xsmall"
    justify="center"
    margin={{ bottom: "medium" }}
    pad={{ left: "medium" }}
  >
    <Book size="medium" color={headingColor} />
    <Heading color={headingColor} level="2" margin="medium">
      Shakespeare Reviewed
    </Heading>
  </Box>
)

Header.propTypes = {
  background: PropTypes.string,
  headingColor: PropTypes.string,
}
