import React, { Component } from "react";
import { Grid, Button, Card } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Grid textAlign="center" columns={4}>
        <Grid.Column>
          <br />
          <Card>
            <Card.Content>
              <Card.Header>Number Of Clicks:</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  +1
                </Button>
                <Button basic color="red">
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
