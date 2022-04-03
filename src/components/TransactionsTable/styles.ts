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

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-of-type {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }

            &.actions {
                display: flex;
                justify-content: flex-start;
            }

            button {
                color: var(--text-body);
                background: unset;
                border: unset;
                transition: color 0.2s;

                &:hover {
                    color: var(--red);
                }

                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
`;