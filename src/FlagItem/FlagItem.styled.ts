import styled from "styled-components";

interface Props {
  isSubflag?: boolean;
}
export const Box = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #1b1c20;
  width: ${(props) => (props.isSubflag ? "208px" : "240px")};
  height: ${(props) => (props.isSubflag ? "30px" : "50px")};
  align-items: center;
  padding: ${(props) => (props.isSubflag ? "8px 24px" : "8px")};
  border-radius: ${(props) => !props.isSubflag && "4px"};
  position: relative;
`;

export const Field = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px;

  .Dropdown-control {
    width: 50px;
    color: white;
    font-size: 11px;
    background-color: unset;
  }

  .Dropdown-option {
    font-size: 11px;
    &.is-selected {
      background-color: #afdeaf;
    }
  }
`;

export const NameText = styled.div`
  font-size: 11px;
  text-transform: uppercase;
`;
