import styled from "styled-components";

export const Container = styled.article`
    background: var(--gray-2);
    border-radius: 8px;
    padding: 2.5rem;
    margin-bottom: 2rem;

    
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        >div{
            width: 75%;
            display: flex;
            flex-direction: column;
            gap: 5px;

            strong{
                color: var(--gray-7);
            }

            span{
                color: var(--gray-5);
            }
        }
        @media (max-width: 768px){
            >div{
                width: 50vw;
            }
        }

        time{
            font-size: 0.875rem;
            color: var(--gray-5);
        }
    }

    .content {
        line-height: 1.6;
        color: var(--gray-6);
        margin-top:1.5rem;

        p{
            margin-top: 1rem;             
        }

        a{
            font-weight: bold;
            color: var(--green);
            text-decoration: none;
        }

        a:hover{
            color: var(--green-light);
        }
    }

    form{
        width: 100%;
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid var(--gray-3);

        strong{
            line-height: 1.6;
            color: var(--gray-7);
        }

        textarea{
            width: 100%;
            background: var(--gray-1);
            /* border: 1px solid var(--green); */
            border: none;
            resize: none;
            height: 6rem;
            padding: 1rem;
            border-radius: 8px;
            color: var(--gray-6);
            line-height: 1.4;
            margin-top: 1rem;
        }

        
        > div{ 
            max-height: 0;           
            visibility: hidden;          
        }

        :focus-within div{
            visibility: visible;
            max-height: none;
        }

        button{
            background: var(--green);
            color: var(--white);
            padding: 1rem 1.5rem;
            border: 0;
            border-radius: 8px;
            margin-top: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition:ease-in-out 0.2s;
        }

        button:not(:disabled):hover{
            background: var(--green-light);
        }

        button:disabled{
            opacity: 0.7;
            cursor: not-allowed;
        }

    }
`