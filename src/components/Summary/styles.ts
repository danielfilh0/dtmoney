import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-gap: 2rem;
    margin-top: -8rem;
    grid-template-columns: 1fr;

    @media (min-width: 480px) {
        grid-template-columns: repeat(3, 1fr);
    }

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;

            @media (min-width: 768px) {
                font-size: 1rem;
            }

            @media (min-width: 1200px) {
                font-size: 2rem;
            }
        }

        &.highlight-background {
            background: var(--green);
            color: var(--shape);
        }
    }
`;
