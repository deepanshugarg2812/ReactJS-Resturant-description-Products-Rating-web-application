import React,{Component} from 'react'
import {Card,CardImgOverlay,CardTitle,CardImg,Breadcrumb,BreadcrumbItem, Button,Modal,ModalBody,ModalHeader,Row,Col,Label} from 'reactstrap'
import {Link} from 'react-router-dom'
import {LocalForm,Control} from 'react-redux-form';
import {Stagger,Fade} from 'react-animation-components'

class CommentForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
  
    handleSubmit(values) {
      this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
  
    render() {
      return (
        <div>
          <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil" /> Submit Comment
          </Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={this.handleSubmit}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={12}>
                    Rating
                  </Label>
                  <Col md={{ size: 12 }}>
                    <Control.select
                      model=".rating"
                      name="rating"
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="author" md={12}>
                    Your Name
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model=".author"
                      id="author"
                      name="author"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment" md={12}>
                    Comment
                  </Label>
                  <Col md={12}>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      rows={5}
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Button type="submit" value="submit" color="primary">
                  Submit
                </Button>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      );
    }
}

function RenderMenuItem ({dish}) {
    return (
        <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        </Card>
        );
}

function DishComments ({comment}) {
    return (
        <div>
          <Fade in>
            <p>{comment.comment}</p>
            <p>{comment.author} {comment.date}</p>
          </Fade>
        </div>
        );
}

function DishDetail(props){
    const comments = props.comments.map((comment) => {
        return (
            <DishComments comment = {comment}/>
        );
    })
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem>Dish</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row m-2">
                <div className="col-md-6">
                    <RenderMenuItem dish={props.dish}/>
                </div>
                <Stagger in>
                <div className="col md-6">
                    <h3>Comments</h3>
                    {comments}
                    <CommentForm dishId={props.dish.id} addComment={props.postComment}/>
                </div>
                </Stagger>
            </div>
        </div>
    );
}

export default DishDetail;