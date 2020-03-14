import React, { Component } from 'react';
import InputSelection from './input-selection';

const MakeBoard = () => {
  let block = [];
  for (let i = 0; i < 9; i++) {
    block.push(['', '', '', '', '', '', '', '', ''])
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
