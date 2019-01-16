import React from "react";
import { Button, Card, Input } from "semantic-ui-react";

class AddToScore extends React.Component {
  state = { voteMultiplier: this.props.voteMultiplier };

  handleVoteMultiplierChange = e => {
    console.log("multiplier change invoked.");
    this.setState({ voteMultiplier: e.target.value });
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <h2>{"Current Multiplier: " + this.state.voteMultiplier}</h2>
          <Input
            type="text"
            fluid
            label="Edit Multiplier:"
            value={this.state.voteMultiplier}
            onChange={this.handleVoteMultiplierChange}
          />
          <Button fluid color="green" onClick={this.props.onClick}>
            Add One
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default AddToScore;
