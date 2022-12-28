import styled from "styled-components";

export const Button = styled.button`
  @media (max-width: 840px) {
    font-size: 1rem;
  }

  font-size: 2rem;
  font-weight: 900;
  color: #f1f5f9;
  padding: 1rem 3rem;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  border: none;
  border-bottom: ${(props) =>
    props.isPressed ? "none" : `solid .5rem ${props.darkerColor}`};
  transform: ${(props) => (props.isPressed ? "translateY(.5rem)" : "none")};
`;
