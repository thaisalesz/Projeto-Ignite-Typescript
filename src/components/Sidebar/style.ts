import styled from 'styled-components';

export const Container = styled.aside`
    background: var(--gray-2);
    overflow: hidden;
    border-radius: 8px;

    > img{
        width: 100%;
        height: 72px;
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -2.5rem;


        strong{
            font-weight: 700;
            color:var(--gray-7);
            margin-top: 1rem;
            line-height: 160%;
        }

        span{
            font-weight: 400;
            font-size: 0.875rem;
            color: var(--gray-5);

        }
    }

    footer{
        border-top: 1px solid var(--gray-3);
        margin-top: 1.5rem;
        padding:1.5rem 2rem 2rem;    
        
        button{
            width: 100%;
            height: 50px;
            background-color: transparent;
            color: var(--green);
            border: 1px solid #00B37E;
            border-radius: 8px;
            padding: 0 1rem;
            font-weight: bold;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;

            transition: color 0.5s, background-color .5s;

        }

        button:hover{
            background-color: var(--green);
            color: var(--white);        
        }
    }

    
`