import styled from "styled-components";

export const ProductContainer = styled.div`
max-width: 500px;
margin: 0 auto;
  & div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span {
      background-color: yellow;
      padding: 0.5rem;
      border-radius: 15px;
    }
  }

  & img {
    max-width: 100%;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 10px 10px 0 black;
    margin-block: 2rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & > p {
    margin-inline-end: 0.5rem;
  }
`;

export const AddToCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-block: 1rem;
  margin-top: 2rem;

  & h3 {
    margin-inline-end: 1rem;
  }
 @media (max-width: 383px) {
  & button {
    flex-grow: 1;
  }}
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;

  & span {
    padding: 0.5rem;
    border: 2px solid black;
    border-radius: 15px;
    margin-inline-start: 0.5rem;
    box-shadow: 5px 5px 0 black;
    background-color: white;
  }
`;

export const Reviews = styled.div`
& li {
  border: 2px solid black;
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 10px 10px 0 black;
  background-color: #4EFFAE;
}`;