import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Badge, ButtonGroup, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

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
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold" style={{margin: '5px'}}>
            Upgrades for your Network
            <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>__ Points</Badge>
          </span>
        <FormGroup style={{margin: '5px'}}>
          <Label for="exampleCustomSelect" style={{margin: '5px'}}>Number of Layers</Label>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect" >
            <option value="">Select</option>
            <option>+1 (10 points)</option>
            <option>+2 (20 points)</option>
            <option>+3 (30 points)</option>
            <option>+4 (40 points)</option>
            <option>+5 (50 points)</option>
          </CustomInput>
        </FormGroup>

        <FormGroup style={{margin: '5px'}}>
          <Label for="exampleCustomSelect" style={{margin: '5px'}}>Some Other Parameter</Label>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect" >
            <option value="">Select</option>
            <option>+1</option>
            <option>+2</option>
            <option>+3</option>
            <option>+4</option>
            <option>+5</option>
          </CustomInput>
        </FormGroup>

        <Button color="success" style={{margin: '5px'}}>Send to Gym</Button>

        </div> 
      }
      </Fragment>
    );
  }

}

export default Post;
