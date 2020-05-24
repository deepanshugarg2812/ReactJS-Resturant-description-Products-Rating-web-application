import React , {Component} from 'react'
import {Nav,NavItem,NavbarBrand,NavbarToggler,Navbar, Collapse,Jumbotron,Modal,ModalHeader,ModalBody,Button,Form,FormGroup,Input,Label} from 'reactstrap'
import {NavLink} from 'react-router-dom'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpened : true,
            opened : false
        }
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModel = this.toggleModel.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    toggleNav(){
        this.setState({
            isOpened : !this.state.isOpened
        })
    }

    toggleModel(){
        this.setState({
            opened : !this.state.opened
        })
    }

    handleLogin(event){
        alert("Username is " + this.username.value + "and password is" + this.password.value)
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <Navbar expand="md" dark>
                    <NavbarBrand className="mr-auto">
                        <img src={'assets/images/logo.png'} height="30" width="41" alt="Restorante de fusion" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isOpened} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                        </Nav>   
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <Button onClick={this.toggleModel}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                            </NavItem>
                    </Nav>    
                    </Collapse>       
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.opened} toggle={this.toggleModel}>
                    <ModalHeader> Login <span className="fa fa-sign-in fa-lg"></span> </ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" name="remember"
                            innerRef={(input) => this.remember = input}  />
                            Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}