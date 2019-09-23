import assert from 'assert';
import { add, subtract, multiply, divide } from './math';

describe('git-submodule-math', () => {
  describe('add', () => {
    const testCases = [
      {
        args: [ 1, 1 ],
        expect: 2
      },
      {
        args: [ 2, 0 ],
        expect: 2
      },
      {
        args: [ 0, 0 ],
        expect: 0
      },
      {
        args: [ -2, 1 ],
        expect: -1
      },
      {
        args: [ -1, -1 ],
        expect: -2
      },
      {
        args: [ -1, 5 ],
        expect: 4
      }
    ];

    it('正常系', () => {
      for (const testCase of testCases) {
        assert.strictEqual(add(testCase.args[0], testCase.args[1]), testCase.expect, `Error Case: ${testCase.args}`);
      }
    });
  });

  describe('subtract', () => {
    const testCases = [
      {
        args: [ 2, 1 ],
        expect: 1
      },
      {
        args: [ 2, 0 ],
        expect: 2
      },
      {
        args: [ 0, 0 ],
        expect: 0
      },
      {
        args: [ -2, 1 ],
        expect: -3
      },
      {
        args: [ -1, -1 ],
        expect: 0
      },
      {
        args: [ -1, -2 ],
        expect: 1
      }
    ];

    it('正常系', () => {
      for (const testCase of testCases) {
        assert.strictEqual(subtract(testCase.args[0], testCase.args[1]), testCase.expect, `Error Case: ${testCase.args}`);
      }
    });
  });

  describe('multiply', () => {
    const testCases = [
      {
        args: [ 2, 1 ],
        expect: 2
      },
      {
        args: [ 2, 0 ],
        expect: 0
      },
      {
        args: [ 0, 0 ],
        expect: 0
      },
      {
        args: [ -2, 1 ],
        expect: -2
      },
      {
        args: [ -1, -1 ],
        expect: 1
      }
    ];

    it('正常系', () => {
      for (const testCase of testCases) {
        assert.strictEqual(multiply(testCase.args[0], testCase.args[1]), testCase.expect, `Error Case: ${testCase.args}`);
      }
    });
  });

  describe('divide', () => {
    const testCases = [
      {
        args: [ 2, 1 ],
        expect: 2
      },
      {
        args: [ 2, 4 ],
        expect: 0.5
      },
      {
        args: [ 2, 0 ],
        expect: Infinity
      },
      {
        args: [ 0, 0 ],
        expect: NaN
      },
      {
        args: [ -2, 1 ],
        expect: -2
      },
      {
        args: [ -1, -1 ],
        expect: 1
      }
    ];

    it('正常系', () => {
      for (const testCase of testCases) {
        assert.strictEqual(divide(testCase.args[0], testCase.args[1]), testCase.expect, `Error Case: ${testCase.args}`);
      }
    });
  });
});
