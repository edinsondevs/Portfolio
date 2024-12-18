import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/EM_2.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
		<Navbar
			expanded={expand}
			collapseOnSelect
			expand='md'
			fixed='top'
			className='navbar navbar-expand-md'>
			<Container className='d-flex justify-content-between '>

				<Navbar.Brand
					href='/'
					className='d-flex'>
					<img
						src={logo}
						className='img-fluid logo'
						alt='brand'
					/>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => {
						updateExpanded(expand ? false : "expanded");
					}}>
					<AiOutlineMenu color='white' />
				</Navbar.Toggle>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav
						className='ms-auto'
						defaultActiveKey='#home'>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/'
								onClick={() => updateExpanded(false)}>
								<AiOutlineHome
									style={{ marginBottom: "0px" }}
								/>{" "}
								Inicio
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/about'
								onClick={() => updateExpanded(false)}>
								<AiOutlineUser
									style={{ marginBottom: "2px" }}
								/>{" "}
								Sobre Mí
							</Nav.Link>
						</Nav.Item>

						{/* <Nav.Item>
							<Nav.Link
								as={Link}
								to='/project'
								onClick={() => updateExpanded(false)}>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: "2px" }}
								/>{" "}
								Projects
							</Nav.Link>
						</Nav.Item> */}

						<Nav.Item>
							<Nav.Link
								as={Link}
								to='/resume'
								onClick={() => updateExpanded(false)}>
								<CgFileDocument
									style={{ marginBottom: "2px" }}
								/>{" "}
								CV
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className='fork-btn'>
							<Button
								href='https://github.com/edinsondevs'
								target='_blank'
								className='fork-btn-inner'>
								<CgGitFork style={{ fontSize: "1.2em" }} />{" "}
								<AiFillStar style={{ fontSize: "1.1em" }} />
							</Button>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
  );
}

export default NavBar;
