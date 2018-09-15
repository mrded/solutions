const Node = require('../index.js');

let node = new Node(12);
//     12
//    /  \
//   5    20
//  /\    /\
// 2  6  15  22

const values = [5, 20, 2, 6, 15, 22];
values.map(node.insert.bind(node));

module.exports = function() {
  describe('min', () => {
    it('of one', () => {
      const node = new Node(42);
      const output = node.min();
      expect(output.data).toBe(42);
    });

    it('of many', () => {
      const output = node.min();
      expect(output.data).toBe(2);
    });
  });

  describe('max', () => {
    it('of one', () => {
      const node = new Node(42);
      const output = node.max();
      expect(output.data).toBe(42);
    });

    it('of many', () => {
      const output = node.max();
      expect(output.data).toBe(22);
    });
  });
}
