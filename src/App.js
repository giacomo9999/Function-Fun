import React, { Component } from "react";
import { Grid, Button, Card } from "semantic-ui-react";

class App extends Component {
  state = { votes: 0 };

  addOne = e => {
    let currentVotes = this.state.votes;
    this.setState({ votes: currentVotes + 1 });
  };

  subtractOne = e => {
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
              <Card.Header>Number Of Clicks:{this.state.votes}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green" onClick={this.addOne}>
                  +1
                </Button>
                <Button basic color="red" onClick={this.subtractOne}>
                  -1
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
