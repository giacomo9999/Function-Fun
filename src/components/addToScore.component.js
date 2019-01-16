import React from "react";
import { Button, Card } from "semantic-ui-react";

class AddToScore extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Button fluid color="green" onClick={this.props.onClick}>
            Add One
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default AddToScore;
