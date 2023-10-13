import styled from "styled-components";

export const ProductContainer = styled.li`
  margin-block: 1.5rem;

  @media (min-width: 275px) {
    display: grid;
    grid-template-areas:
      "images title"
      "description description"
      "controls controls";
  }
  @media (min-width: 376px) {
    grid-template-areas:
      "images title"
      "images description"
      "controls controls";
    grid-template-columns: auto 1fr;
  }

  @media (min-width: 478px) {
    grid-template-areas:
      "images title controls"
      "images description controls";
    align-items: center;
    grid-template-columns: auto 1fr 1fr;
  }

  @media (min-width: 722px) {
    grid-template-areas:
      "images title controls controls"
      "images description controls controls";
    grid-template-columns: auto 1fr 1fr 1fr;
  }

  border: ${({ theme }) => `${theme.borders.regular} ${theme.colors.black}`};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  box-shadow: ${({ theme }) =>
    `${theme.shadows.regular} ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.large} ${theme.colors.black}`};
  }
`;

export const ImageContainer = styled.div`
  grid-area: images;
  min-width: 70px;
  height: 100%;
  img {
    object-fit: cover;
    width: 100%;
    border-radius: ${({ theme }) =>
      `${theme.borderRadius.image} ${theme.borderRadius.image} 0 0`};
    @media (min-width: 275px) {
      border-radius: ${({ theme }) =>
        `${theme.borderRadius.image} 0 ${theme.borderRadius.regular} 0`};
      max-width: 100px;
    }
    @media (min-width: 478px) {
      height: 100%;
      border-radius: ${({ theme }) =>
        `${theme.borderRadius.image} 0 0 ${theme.borderRadius.image}`};
    }
  }
`;

export const HeadingContainer = styled.div`
  grid-area: title;
  font-size: 0.8rem;
  margin: 0.5rem;

  @media (min-width: 376px) {
    margin-top: -0.2rem;
    margin-bottom: -1.5rem;
    font-size: 0.7rem;
  }

  @media (min-width: 876px) {
    font-size: 0.8rem;
  }
`;

export const TextContainer = styled.div`
  grid-area: description;
  margin: 1rem 0.5rem;
  text-align: left;

  @media (min-width: 275px) {
    margin-top: 0;
  }

  @media (min-width: 376px) {
    margin-top: 1rem;
  }

  p {
    margin-block: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const CartControls = styled.div`
  grid-area: controls;
  * {
    font-size: 1rem;
  }
  margin: 0.5rem;
  @media (max-width: 440px) {
    text-align: center;
  }
  @media (min-width: 440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 478px) {
    flex-direction: column;
    align-items: flex-end;
  }
  @media (min-width: 722px) {
    flex-direction: row;
    align-items: baseline;
  }
  @media (min-width: 722px) {
    justify-content: space-around;
  }

  a button {
    @media (max-width: 440px) {
      width: 100%;
    }
  }
`;

export const Quantity = styled.div`
  @media (min-width: 288px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    align-items: center;
  }

  @media (min-width: 478px) {
    flex-direction: column;
  }

  @media (min-width: 610px) {
    flex-direction: row;
  }

  > p {
    margin: 1rem auto;
  }
  button:first-of-type {
    margin-inline: 0.7rem;
  }
  button {
    width: 50px;
  }
`;
