import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        --white: #fff;
        --green: #00875F;
        --green-light: #00B37E;

        --gray-1:#121214;
        --gray-2:#202024;
        --gray-3: #323238;
        --gray-4: #7C7C8A;

        --gray-5:#8D8D99;
        --gray-6:#C4C4CC;
        --gray-7: #E1E1E6;

        --red-danger:#F75A68;
    }

    :focus{
        outline: transparent;
        box-shadow: 0 0 0 2px var(--green);
    }

    body, section, header,li, ul,ol, div, a, textarea, button, input, form,h1,h2,h3, h4, p, span ,img {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body {
        background-color: var(--gray-1);
        color: var(--gray-7);
        font-family: 'Roboto', sans-serif;
    }

    body, button , textarea , input {
        font-size: 1rem;
        font-weight: 400;
    }

    button:hover{
        cursor: pointer;
    }

    .container--feed{
        max-width: 70rem;
        margin: 2rem auto;
        padding: 0 1rem;

        display: grid;
        grid-template-columns: 256px 1fr;
        gap: 2rem;
        align-items: flex-start;
    }

    @media (max-width: 768px){

        html{
            font-size: 87.5%;
        }
        .container--feed{
            grid-template-columns: 1fr;
        }
    }


`