import React, { Fragment } from 'react';

import {
  Button, ButtonGroup, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const BANNER = 'https://previews.123rf.com/images/arnica/arnica1303/arnica130300040/18406720-a-cute-cartoon-dog-vector-illustration.jpg';

const SideCard = () => (
  <Fragment>
    <Card>
      <CardImg top width="100%" src={BANNER} alt="banner" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary" style={{margin: '5px'}}>Image #120</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem', margin: '5px' }}>119 seconds remaining</CardSubtitle>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem', margin: '5px'}}>Please classify this animal as either a dog or a cat.</CardText>
        <ButtonGroup vertical>
          <Button color="success" className="font-weight-bold" style={{margin: '5px'}}>Dog</Button>
          <Button color="success" className="font-weight-bold" style={{margin: '5px'}}>Cat</Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  </Fragment>
);

export default SideCard;
