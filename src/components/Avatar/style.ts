import styled, {css} from "styled-components";

interface StyledProps{
    hasBorder: boolean;
}

export const Container = styled.img<StyledProps>`
    width: 3rem ;
    height: 3rem;
    border-radius: 8px;
    object-fit: cover;
    /* box-sizing: initial; */
    /* position: relative;
    bottom: 30px; chocada passada */

    ${({ hasBorder }) => hasBorder && css`
        width: calc(3rem + 12px);
        height: calc(3rem + 12px);
        border: 4px solid var(--gray-2);
        outline: 2px solid var(--green);   
    `}

`;