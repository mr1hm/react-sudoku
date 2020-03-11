import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const MakeBoard = () => {
  let block = {};
  for (let i = 1; i <= 9; i++) {

  }
}

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBlocks: {
        1: {
          row: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          col: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        2: {
          row: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          col: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        3: {
          row: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          col: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
      },
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <CssBaseline />
        <Container className="game-container" max-width="lg">
          <Grid container className="game-board" direction="row" justify="center">
            <Grid container item xs={4} direction="row" className="game-block">
              <Grid item xs={4} className="input-block">
                <input type="text" className="input-value" value={} />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
            </Grid>
            <Grid container item xs={4} className="game-block">
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper className="paper">1</Paper>
              </Grid>
            </Grid>
            <Grid container item xs={4} className="game-block">
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
            </Grid>
            <Grid container item xs={4} className="game-block">
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
            </Grid>
            <Grid container item xs={4} className="game-block">
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
            </Grid>
            <Grid container item xs={4} className="game-block">
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
            </Grid>
            <Grid container item xs={4} className="game-block">
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
            </Grid>
            <Grid container item xs={4} className="game-block">
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
            </Grid>
            <Grid container item xs={4} className="game-block">
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
              <Grid item xs={4} className="input-block">
                <Paper />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
