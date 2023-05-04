import styled from "styled-components";

export const ButtonGroup = styled.ul`
  display: flex;
  justify-content: center;  
`
export const ListItem = styled.li`
    padding: 20px;
`
export const Button = styled.button`
    padding: 10px; 
    border: 0;
    border-radius: 5px;
    text-transform: capitalize;
    background-color: lightgrey;

    &:hover {
        background-color: #2196f3;
        color: #fff;
        cursor: pointer;
        
    }
`