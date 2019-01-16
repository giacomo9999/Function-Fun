import React from "react";
import { Button, Card } from "semantic-ui-react";

class SubtractFromScore extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Button fluid color="red" onClick={this.props.onClick}>
            Subtract One
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default SubtractFromScore;
