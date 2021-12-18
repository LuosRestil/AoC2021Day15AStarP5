class Cell {  
  constructor(row, col, cost, w, h) {
    this.row = row;
    this.col = col;
    this.cost = cost;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.neighbors = [];
    this.cameFrom = null;
  }
  
  show(r, g, b) {
    fill(r, g, b);
    rect(this.col * w, this.row * h, w, h);
    // fill(0);
    // strokeWeight(2);
    // text(this.cost, this.col * w + 5, this.row * h + 15);
    // strokeWeight(1);
    // text("f: " + Math.floor(this.f), this.col * w + 5, this.row * h + 25)
    // text("g: " + Math.floor(this.g), this.col * w + 5, this.row * h + 35)
  }
  
  addNeighbors(grid) {
    if (this.row < grid.length - 1) {
      this.neighbors.push(grid[this.row + 1][this.col]);
    }
    if (this.row > 0) {
      this.neighbors.push(grid[this.row - 1][this.col]);
    }
    if (this.col < grid[0].length - 1) {
      this.neighbors.push(grid[this.row][this.col + 1]);
    }
    if (this.col > 0) {
      this.neighbors.push(grid[this.row][this.col - 1]);
    }
  }
}