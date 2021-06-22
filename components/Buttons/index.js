import styled from "styled-components"
import { useDelayedProp, FLASH_S } from "../../hooks/useDelayedProp"

const StyledButton = styled.button`
  border-radius: 12px;
  background-color: white;
  font-weight: 700;
  border: 0;
  box-shadow: #777 0px 3px 0px 0px, 0px 0px 1px rgba(0, 0, 0, 0.25);
  transition: 0.1s;

  :active {
    background-color: var(--fail);
    transition: ${FLASH_S}s ease-out;
  }

  ${({ $correct }) =>
    $correct &&
    `
    :active {
      background-color: var(--success);
      transition: 0s ease-in;
    }
  `}

  :active {
    box-shadow: none;
    transform: translateY(3px);
  }
`

const Button = ({ correct, ...props }) => {
  const delayedCorrect = useDelayedProp(correct)
  return <StyledButton $correct={delayedCorrect} {...props} />
}

const Grid = styled.div`
  --button-size: ${({ large }) => (large ? "5rem" : "3.5rem")};
  --gap: 1.25rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  margin: 2rem auto;
  width: calc(var(--button-size) * 3 + var(--gap) * 2);

  ${StyledButton} {
    font-size: 1.5rem;
    height: var(--button-size);
    width: var(--button-size);
  }
`

const WhiteButtons = ({ onClick, correctKey }) => (
  <Grid>
    <Button onClick={() => onClick("a")} correct={correctKey === "a"}>
      A
    </Button>
    <Button onClick={() => onClick("b")} correct={correctKey === "b"}>
      B
    </Button>
    <Button onClick={() => onClick("c")} correct={correctKey === "c"}>
      C
    </Button>
    <Button onClick={() => onClick("d")} correct={correctKey === "d"}>
      D
    </Button>
    <Button onClick={() => onClick("e")} correct={correctKey === "e"}>
      E
    </Button>
    <Button onClick={() => onClick("f")} correct={correctKey === "f"}>
      F
    </Button>
    <Button onClick={() => onClick("g")} correct={correctKey === "g"}>
      G
    </Button>
  </Grid>
)

const BlackButtons = ({ onClick, correctKey }) => (
  <Grid large>
    <Button
      correct={correctKey === "a-sharp"}
      onClick={() => onClick("a-sharp")}
    >
      <span>
        A<sup>♯</sup>
      </span>
      <br />
      <span>
        B<sup>♭</sup>
      </span>
    </Button>
    <Button
      correct={correctKey === "c-sharp"}
      onClick={() => onClick("c-sharp")}
    >
      <span>
        C<sup>♯</sup>
      </span>
      <br />
      <span>
        D<sup>♭</sup>
      </span>
    </Button>
    <Button
      correct={correctKey === "d-sharp"}
      onClick={() => onClick("d-sharp")}
    >
      <span>
        D<sup>♯</sup>
      </span>
      <br />
      <span>
        E<sup>♭</sup>
      </span>
    </Button>
    <Button
      correct={correctKey === "f-sharp"}
      onClick={() => onClick("f-sharp")}
    >
      <span>
        F<sup>♯</sup>
      </span>
      <br />
      <span>
        G<sup>♭</sup>
      </span>
    </Button>
    <Button
      correct={correctKey === "g-sharp"}
      onClick={() => onClick("g-sharp")}
    >
      <span>
        G<sup>♯</sup>
      </span>
      <br />
      <span>
        A<sup>♭</sup>
      </span>
    </Button>
  </Grid>
)

export { Button, WhiteButtons, BlackButtons }
