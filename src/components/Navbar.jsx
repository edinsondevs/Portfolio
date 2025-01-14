import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import avatar from "../Assets/picture-profile.png";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
		<Navbar
			expanded={expand}
			collapseOnSelect
			expand='md'
			fixed='top'
			className='navbar navbar-expand-md '>
			<Container className='d-flex justify-content-between'>
				<div className='d-flex  '>
					<Navbar.Brand
						href='/'
						className='d-flex align-items-center gap-3'>
						<img
							src={avatar}
							alt='avatar'
							style={{
								maxHeight: "50px",
								borderRadius: "50%",
								transform: "scaleY(1)",
							}}
						/>
						<p className='fs-5'>Fronted Developer</p>
					</Navbar.Brand>
					<br />
				</div>

				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					style={{ marginLeft: "auto" }}
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
