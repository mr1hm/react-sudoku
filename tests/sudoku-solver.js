module.exports.parseBoard = function (board) {
  return board.split('\n').map(row => row.split('').map(num => +num))
}

describe('#saveEmptyPositions()', function () {
  it('should save all of the empty positions, 0s, in a parsed board', function () {
    emptyPositions = solver.saveEmptyPositions(parsedBoard);

    var expectedPositions = [
      [0, 0], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [1, 0], [1, 1],
      [1, 2], [1, 5], [2, 0], [2, 1], [2, 2], [2, 6], [2, 7], [2, 8], [3, 0],
      [3, 1], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [4, 4], [4, 5],
      [4, 7], [4, 8], [5, 1], [5, 3], [5, 4], [5, 5], [5, 8], [6, 1], [6, 2],
      [6, 4], [6, 6], [6, 8], [7, 1], [7, 3], [7, 4], [7, 5], [7, 8], [8, 1],
      [8, 2], [8, 3], [8, 5], [8, 6], [8, 7], [8, 8]
    ];

    expect(emptyPositions.length).to.equal(51);
    expect(emptyPositions).to.eql(expectedPositions);
  });
});
