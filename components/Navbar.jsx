import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import styled from 'styled-components'
import Link from 'next/link'

const Navbar = () => {

    // # States
    const [click, setClick] = useState(false)

    console.log(click);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <Header>
            <Container>
                <NavLogo href="#" onClick={closeMobileMenu}>Mukdahan</NavLogo>
                <NavMenu click={click} >
                    <NavList onClick={handleClick}>
                        <NavListItem>
                            <Link href="#">
                                <a>Home</a>
                            </Link>
                        </NavListItem>
                        <NavListItem>
                            <Link href="#about">
                                <a>About</a>
                            </Link>
                        </NavListItem>
                        <NavListItem>
                            <Link href="#discover">
                                <a>Discover</a>
                            </Link>
                        </NavListItem>
                        <NavListItem>
                            <Link href="#review">
                                <a>Review</a>
                            </Link>
                        </NavListItem>
                        <NavListItem>
                            <Link href="#contact">
                                <a>Contact</a>
                            </Link>
                        </NavListItem>
                    </NavList>
                    <DarkMode>
                        <span>Dark Mode</span>
                        <i className="ri-moon-line"></i>
                    </DarkMode>
                    <CloseMenu onClick={closeMobileMenu}>
                        <i className="ri-close-line"></i>
                    </CloseMenu>
                </NavMenu>

                <MobileMenu onClick={handleClick}>
                    <i className='ri-function-line'></i>
                </MobileMenu>

            </Container>
        </Header>
    )
}

export default Navbar


// # Styled-components
const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    /* background-color: hsl(190, 64%, 22%); */
    background-color: transparent;
`

const Container = styled.nav`
    max-width: 968px;
    height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        height: calc(3rem + 1.5rem);
    }
`

const NavLogo = styled.a`
    color: #fff;
    font-weight: 600;
    cursor: pointer;
`

const NavMenu = styled.div`
    
   
   @media screen and (max-width: 767px) {
        position: fixed;
        padding: 3rem;
        right: ${({ click }) => (click ? 0 : '-100%')};
        top: 0;
        background-color: hsl(190, 100%, 99%);
        width: 70%;
        height: 100%;
        box-shadow: -1px 0 4px rgba(14, 55, 63, 0.15);
        transition: .4s;
   }

   @media screen and (min-width: 768px) {
        position: relative;
        display: flex;
        column-gap: 1rem;   
   }
`

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        column-gap: 4rem;
        list-style: none;
    }
`

const NavListItem = styled.li`
    font-weight: 600;
    text-transform: uppercase;

    a {
        color: hsl(190, 8%, 60%);
        text-decoration: none;

        &:hover {
        color: hsl(190, 24%, 35%);
        }
    }

    @media screen and (min-width: 768px) {
        a {
            color: #fff;
            text-transform: initial;
    
            &:hover {
                color: #fff;
            }
        }  
    }
`

const DarkMode = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    position: absolute;
    left: 3rem;
    bottom: 4rem;
    color: hsl(190, 24%, 35%);
    cursor: pointer;
    font-size: 1rem;

    span {
        font-size: 0.813rem;
    }

    @media screen and (min-width: 768px) {
        position: initial;
        /* margin-left: 10rem; */

        span {
            display: none;
        }
        
        i {
            color: #fff;
        }
    }
`

const MobileMenu = styled.div`
    font-size: 1.2rem;
    cursor: pointer;
    color: #fff;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

const CloseMenu = styled.div`

    i {
        position: absolute;
        top: 0.75rem;
        right: 1rem;
        font-size: 1.5rem;
        color: hsl(190, 24%, 35%);
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        i {
           display: none;
       }
    }
`
