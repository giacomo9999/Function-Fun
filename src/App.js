import React, { Component } from "react";
import { Grid, Card, Header } from "semantic-ui-react";
import AddToScore from "./components/addToScore.component";
import SubtractFromScore from "./components/subtractFromScore.component";

class App extends Component {
  state = { votes: 0, voteMultiplier: 3 };

  handleUpVote = () => {
    console.log("Upvote happened");
    let currentVotes = this.state.votes;
    const tempVM = this.state.voteMultiplier;
    this.setState({
      votes: currentVotes + this.state.voteMultiplier,
      voteMultiplier: tempVM
    });
    console.log(this.state);
  };

  handleDownVote = () => {
    console.log("Downvote happened");
    let currentVotes = this.state.votes;
    this.setState({ votes: currentVotes - 1 });
  };

  render() {
    let currentVotes = this.state.votes;
    console.log("current vote total:", currentVotes);
    return (
      <Grid textAlign="center" columns={4}>
        <Grid.Column>
          <br />
          <Card>
            <Card.Content>
              <Header as="h2">{"Number Of Votes: " + this.state.votes}</Header>
              <Header as="h4">
                {"Vote Multiplier: " + this.state.voteMultiplier}
              </Header>
            </Card.Content>
          </Card>
          <AddToScore
            onClick={this.handleUpVote}
          />
          <SubtractFromScore onClick={this.handleDownVote} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
