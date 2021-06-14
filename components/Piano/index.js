import styled from "styled-components"
import PianoSvg from "./PianoSvg"

const Piano = styled(PianoSvg)`
  display: block;
  margin: 0 auto;

  .arrow {
    display: none;
  }

  ${({ arrow }) =>
    arrow &&
    `.arrow-${arrow} {
      display: block;
    }`}

  .label {
    display: ${({ showLabels }) => (showLabels ? "block" : "none")};
  }
`

export default Piano
