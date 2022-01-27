import styled from "styled-components";

interface Props {
  onClick?: () => void;
  isDisabled?: boolean;
}
export const IconWrapper = styled.div<Props>`
  ${(props) => props.onClick && !props.isDisabled && "cursor: pointer;"}
  svg {
    color: ${(props) => props.color};
  }
`;
