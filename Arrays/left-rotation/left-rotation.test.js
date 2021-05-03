import fs from 'fs';
import path from 'path';
import solution from './solution';

const testDir = path.join(__dirname, 'testcases');
const inputDir = path.join(testDir, 'input');
const outputDir = path.join(testDir, 'output');
const files = fs.readdirSync(inputDir);
const slugs = files.map(f => path.basename(f, '.txt'));

const parseInput = slug => {
  const input = fs.readFileSync(path.join(inputDir, `${slug}.txt`), 'utf-8');
  const [size, data] = input
    .trim()
    .split('\n')
    .filter(l => l);
  const [, num] = size.split(' ').map(i => parseInt(i, 10));
  const arr = data.split(' ').map(i => parseInt(i, 10));
  return [arr, num];
};

const parseOutput = slug => {
  const output = fs.readFileSync(path.join(outputDir, `${slug.replace('in', 'out')}.txt`), 'utf-8');
  return output
    .trim()
    .split(' ')
    .map(i => parseInt(i, 10));
};

const cases = slugs.map(slug => [slug, parseInput(slug), parseOutput(slug)]);

describe('Left rotation', () => {
  test.each(cases)('%s', (slug, inputs, output) => {
    expect(solution(...inputs)).toStrictEqual(output);
  });
});
