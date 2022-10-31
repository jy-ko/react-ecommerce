import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: tomato;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        SuperSale!
    </Container>
  )
}

export default Announcement
