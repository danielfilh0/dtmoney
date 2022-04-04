import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    max-width: 1120px;
    margin: 0 auto;

    > div {
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            font-weight: 400;
            color: var(--text-body);
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
    }
`;