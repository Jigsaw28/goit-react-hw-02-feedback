import styled from "styled-components";

export const Stat = styled.div`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: start;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    font-size: 17px;
`
export const Text = styled.span`
    &:not(:last-child) {
        padding-bottom: 10px;
    }
`