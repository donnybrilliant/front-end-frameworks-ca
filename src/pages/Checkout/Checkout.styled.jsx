import styled from 'styled-components'



export const StyledForm = styled.form`
& div {
  margin-block: 1rem;
  

}
& h3 {
    margin-top: 3rem;
  }
`

export const StyledLi = styled.li`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-block: 2rem;
padding-right: 2rem;
border: 2px solid black;
border-radius: 15px;
box-shadow: 10px 10px 0 black;
background-color: #4EFFAE;

&:hover {
box-shadow: 15px 15px 0 black;
background-color: white;
}
`