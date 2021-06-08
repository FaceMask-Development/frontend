import styled from 'styled-components'

export const PresentationContainer = styled.div`
    display: flex;
    flex-direction: column;

    main {
        height: 100%;
    
        display: flex;
        flex-direction: column;
    }
`

export const GroupAbout = styled.div`
    margin-top: 2.5rem;
    height: 40%;

    display: flex;
    flex-direction: column;

    h2 {
        width: 20%;
        font-size: 2.8rem;
    }

    p {
        width: 30%;
    }
`

export const GroupCards = styled.ul`
    display: flex;
    list-style: none;
`

export const Card = styled.li`
    width: 20%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        margin-top: 1rem;
    }

    p {
        margin-top: 1rem;
    }

    & + & {
        margin-left: 1.4rem;
    }

`
