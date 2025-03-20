let nodeArray = [];
let linkArray = [];
const cutHistory = [];

const gridCount = 40;
const friction = 0.99;
const forceMultiplier = 0.25;
const knifeRange = 10;
const speedLimit = 8;

const node = function (x, y, pinned) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.force = createVector(0, 0);
  this.pinned = pinned;

  this.show = () => rect(this.pos.x, this.pos.y, 4);

  this.update = () => {
    if (this.pinned) return;
    const acc = this.force.mult(forceMultiplier);

    this.vel.add(acc);
    this.vel.limit(speedLimit);
    this.pos.add(this.vel);

    this.force.mult(0);
    this.vel.mult(friction);
  };
};

const link = function (node1, node2) {
  this.node1 = node1;
  this.node2 = node2;
  
  // Generate random color for the link
  this.color = color(random(255), random(255), random(255));

  this.getMiddlePoint = () => this.node1.pos.copy().add(this.node2.pos).div(2);

  this.show = () => {
    stroke(this.color);
    line(
      this.node1.pos.x,
      this.node1.pos.y,
      this.node2.pos.x,
      this.node2.pos.y
    );
  };

  this.update = () => {
    const difference = node2.pos.copy().sub(node1.pos);
    this.node1.pinned || this.node1.force.add(difference);
    this.node2.pinned || this.node2.force.sub(difference);
  };
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  nodeArray = createNodes();
  linkArray = createLinks(nodeArray);
}

function createNodes() {
  const nodes = [];
  const gridSize = min(windowWidth, windowHeight);
  const nodeCount = gridCount + 1;
  const spacing = gridSize / gridCount;

  for (let j = 0; j <= gridCount; j++) {
    for (let i = 0; i <= gridCount; i++) {
      const pinned = i === 0 || j === 0 || i === gridCount || j === gridCount;
      const x = map(i, 0, gridCount, 0, gridSize - spacing);
      const y = map(j, 0, gridCount, 0, gridSize - spacing);
      nodes.push(new node(x, y, pinned));
    }
  }
  return nodes;
}

function createLinks(nodes) {
  const links = [];
  nodes.forEach((current, index) => {
    const rest = nodes.slice(index + 1);
    const neighbors = rest.filter(
      (target) => current.pos.dist(target.pos) <= width / gridCount
    );
    neighbors.forEach(
      (target) =>
        (current.pinned && target.pinned) ||
        links.push(new link(current, target))
    );
  });
  return links;
}

function draw() {
  background(0);
  stroke("black");
  fill(0);
  rectMode(CENTER);

  linkArray.forEach((link) => link.update());
  nodeArray.forEach((node) => node.update());

  linkArray.forEach((link) => link.show());
  nodeArray.forEach((node) => node.show());

  if (keyIsPressed && (key == " " || key == "u" || key == "U")) undo();
}

function undo() {
  if (!cutHistory.length) return;
  const tail = cutHistory.pop();
  linkArray.push(tail);
}

function mouseDragged() {
  const mouse = createVector(mouseX, mouseY);

  linkArray = linkArray.filter((link) => {
    const middle = link.getMiddlePoint();
    const difference = middle.copy().sub(mouse);
    const distance = Math.hypot(difference.x, difference.y);

    if (distance > knifeRange) return true;
    cutHistory.push(link);
    return false;
  });
}
