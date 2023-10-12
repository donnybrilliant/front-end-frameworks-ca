import styled from "styled-components";

export const StarWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-block: 1rem;
`;

export const Star = styled.i`
  color: ${(props) =>
    props.$filled ? props.theme.colors.attention : "transparent"};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.black};
`;

export const PartialStarWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const FilledStar = styled(Star)`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.$percentage}%;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.attention};
`;
