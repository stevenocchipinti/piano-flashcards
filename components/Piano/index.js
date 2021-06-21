import styled from "styled-components"
import PianoSvg from "./PianoSvg"

const Piano = styled(PianoSvg).attrs(
  ({ noArrows }) => noArrows && { viewBox: "0 65 300 175", height: 175 }
)`
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
