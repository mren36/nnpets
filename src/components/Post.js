import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge, ButtonGroup, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Post extends Component {

  state = { post: null }

  componentDidMount() {
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text')
      .then(response => this.setState({ post: response.data }));
  }

  render() {
    return (
      <Fragment>
        { this.state.post && <div className="position-relative">
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold" tyle={{margin: '5px'}}>
            Upgrades for your Network
            <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>50 Points</Badge>
          </span>
          <Form inline style={{margin: '5px'}}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">Layers</Label>
              <Input type="text" name="layers" id="layerInput" placeholder="5" />
            </FormGroup>
          </Form>

        </div> 
      }
      </Fragment>
    );
  }

}

export default Post;
