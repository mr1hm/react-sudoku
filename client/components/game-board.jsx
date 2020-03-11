import React, { Component } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
// import div from '@material-ui/core/div';
// import div from '@material-ui/core/div';

const MakeBoard = () => {
  let block = {};
  for (let i = 1; i <= 9; i++) {
    block[i] = { row: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], col: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] }
  }
  return block;
}

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBlocks: MakeBoard()
    }
  }

  render() {
    return (
      <>
        <main className="game-container container">
          <section className="game-board row">
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
            <div className="game-block col-4">
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
              <div className="row">
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
                <div className="input-block col-4">
                  <div className="input-value">1</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
