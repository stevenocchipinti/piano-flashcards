import styled from "styled-components"

const Button = styled.button`
  border-radius: 12px;
  background-color: #4fd1c5;
  color: white;
  border: 0;
  box-shadow: #2c7a7b 0px 3px 0px 0px;
  transition: 0.1s;

  &:active {
    box-shadow: none;
    transform: translateY(3px);
  }
`

const Grid = styled.div`
  --button-size: ${({ large }) => (large ? "5rem" : "3.5rem")};
  --gap: 1.25rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  margin: 2rem auto;
  width: calc(var(--button-size) * 3 + var(--gap) * 2);

  ${Button} {
    font-size: 1.5rem;
    height: var(--button-size);
    width: var(--button-size);
  }
`

const WhiteButtons = ({ onClick }) => (
  <Grid>
    <Button onClick={() => onClick("a")}>A</Button>
    <Button onClick={() => onClick("b")}>B</Button>
    <Button onClick={() => onClick("c")}>C</Button>
    <Button onClick={() => onClick("d")}>D</Button>
    <Button onClick={() => onClick("e")}>E</Button>
    <Button onClick={() => onClick("f")}>F</Button>
    <Button onClick={() => onClick("g")}>G</Button>
  </Grid>
)

const BlackButtons = ({ onClick }) => (
  <Grid large>
    <Button onClick={() => onClick("a-sharp")}>
      <span>
        A<sup>♯</sup>
      </span>
      <br />
      <span>
        B<sup>♭</sup>
      </span>
    </Button>
    <Button onClick={() => onClick("c-sharp")}>
      <span>
        C<sup>♯</sup>
      </span>
      <br />
      <span>
        D<sup>♭</sup>
      </span>
    </Button>
    <Button onClick={() => onClick("d-sharp")}>
      <span>
        D<sup>♯</sup>
      </span>
      <br />
      <span>
        E<sup>♭</sup>
      </span>
    </Button>
    <Button onClick={() => onClick("f-sharp")}>
      <span>
        F<sup>♯</sup>
      </span>
      <br />
      <span>
        G<sup>♭</sup>
      </span>
    </Button>
    <Button onClick={() => onClick("g-sharp")}>
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

export { WhiteButtons, BlackButtons }
