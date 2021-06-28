import styled from "styled-components"
import PianoSvg from "./PianoSvg"
import { useDelayedProp, FLASH_S } from "../../hooks/useDelayedProp"

const StyledPianoSvg = styled(PianoSvg).attrs(
  ({ $noArrows }) => $noArrows && { viewBox: "0 65 300 175", height: 175 }
)`
  display: block;
  margin: 0 auto;

  .arrow {
    fill: currentColor;
    display: none;
  }

  .white-key {
    fill: var(--white-keys);
  }

  .black-key {
    fill: var(--black-keys);
  }

  ${({ $arrow }) =>
    $arrow &&
    `.arrow-${$arrow} {
      display: block;
    }`}

  ${({ $correctNote }) =>
    $correctNote &&
    `
    .key-${$correctNote} {
      transition: ${FLASH_S}s ease-out;
    }

    .key {
      transition: ${FLASH_S}s ease-out;
    }

    .key:active {
      fill: var(--fail);
      transition: 0s ease-in;
    }

    .key-${$correctNote}:active {
      fill: var(--success);
      transition: 0s ease-in;
    }`}

  .label {
    display: ${({ $showLabels }) => ($showLabels ? "block" : "none")};
  }
`

const Piano = ({
  correctNote,
  onClick,
  noArrows,
  showLabels,
  arrow,
  ...props
}) => {
  const delayedCorrectNote = useDelayedProp(correctNote)

  return (
    <StyledPianoSvg
      $correctNote={delayedCorrectNote}
      $noArrows={noArrows}
      $arrow={arrow}
      $showLabels={showLabels}
      onClick={onClick}
      {...props}
    />
  )
}

export default Piano
