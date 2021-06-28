import styled from "styled-components"

const Card = styled.article`
  display: grid;
  place-items: center;
  min-height: 200px;
  min-width: 250px;
  background-color: var(--card-background);
  border-radius: 1.5rem;
  box-shadow: var(--shadow);
  padding: 1rem 2rem;
  margin: 1rem;
  font-size: 3rem;
`

export default Card
