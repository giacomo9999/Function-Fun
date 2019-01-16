import React from "react";
import { Button, Card, Input } from "semantic-ui-react";

class AddToScore extends React.Component {
  state = { voteMultiplier: this.props.voteMultiplier };

  handleVoteMultiplierChange = e => {
    console.log("multiplier change invoked.");
    this.setState({ voteMultiplier: e.target.value });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      voteMultiplier: this.state.voteMultiplier
    });
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Input
            type="text"
            fluid
            label="Edit Multiplier:"
            value={this.state.voteMultiplier}
            onChange={this.handleVoteMultiplierChange}
          />
          <Button fluid color="green" onClick={this.handleSubmit}>
            Add Weighted Vote (+)
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default AddToScore;
