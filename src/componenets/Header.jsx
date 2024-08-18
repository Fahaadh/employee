import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand><h2><i style={{ color: 'rgba(231, 69, 10, 0.749)' }}  class="fa-solid fa-user"></i></h2> <h4 className='ms-3 mt-2'><Link to={'/'} style={{color:'black'}}>Employee Management System</Link></h4></MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'></MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link custom-toggle' role='button' >
                  <h4 className='mt-2'><i class="fa-solid fa-bars"></i></h4>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem id='nxt' className='mt-2 ms-2' > <Link to={'/1'} style={{color:'black'}} >Report1</Link> </MDBDropdownItem>
                    <MDBDropdownItem id='nxt' className='mt-2 ms-2' > <Link to={'/2'} style={{color:'black'}} >Report2</Link> </MDBDropdownItem>
                    <MDBDropdownItem id='nxt' className='mt-2 ms-2' > <Link to={'/3'} style={{color:'black'}} >Report3</Link></MDBDropdownItem>
                    <MDBDropdownItem id='nxt' className='mt-2 ms-2' > <Link to={'report'} style={{color:'black'}} >Internal Report</Link></MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header