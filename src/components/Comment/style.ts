import styled from "styled-components";

export const Container = styled.section`
    margin-top:1.5rem;
    display: flex;
    gap: 1rem;

    > div{
        flex: 1;
    }

    .content-box{
        background: var(--gray-3);
        border-radius: 8px;
        padding: 1rem;

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;

            strong{
                font-size: 0.875rem;
                line-height: 1.6;
            }
            time{
                font-size: 0.75rem;
                line-height: 1.6;
                color: var(--gray-5);
            }

            button{
                background: transparent;
                border: none;
                color: var(--gray-5);
                font-size: 0%;
                align-self: flex-start;
            }
            button:hover{
                color: var(--red-danger);
            }

        }
        p{
            margin-top: 1rem;
            color: var(--gray-7);
        }

    }

    img{            
        width: calc(3rem);
        height: calc(3rem);
        border-radius: 8px;
        object-fit: cover;
    }

    footer{
        margin-top: 1rem;

        button{
            background: transparent;
            border: 0;
            color: var(--gray-5);  
            
            display: flex;
            align-items: center;
            gap: 0.5rem;
            border-radius: 2px;

            span{
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }
        }

        button:hover{
            color: var(--green);
        }
    }

`