import styled from "styled-components"
import StaffSvg from "./StaffSvg"

const Staff = styled(StaffSvg)`
  display: block;
  margin: 0 auto;

  .note {
    display: none;
  }

  ${({ note }) =>
    note &&
    `#${note} {
      display: block;
    }`}
`

export default Staff
