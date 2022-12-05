import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
 <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYr-r-BGg0B3X2nXtKkHg-ytlHUnBMqPoPlQ&usqp=CAU"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          Smart Cook
        </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header