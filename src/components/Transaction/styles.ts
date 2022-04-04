import styled from "styled-components";

export const Container = styled.tr`
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
            display: grid;
            grid-template-columns: 20px 20px;
            grid-column-gap: 0.5rem;
        }

        button {
            color: var(--text-body);
            background: unset;
            border: unset;
            transition: color 0.2s;

            &:first-of-type {
                &:hover {
                    color: var(--text-title);
                }
            }

            &:last-of-type {
                &:hover {
                    color: var(--red);
                }
            }

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`;
