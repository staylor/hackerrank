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
  return input
    .split('\n')
    .filter(f => f)
    .map(line => line.split(' '))
    .map(line => line.map(i => parseInt(i, 10)));
};

const parseOutput = slug => {
  const output = fs.readFileSync(path.join(outputDir, `${slug.replace('in', 'out')}.txt`), 'utf-8');
  return parseInt(output.trim(), 10);
};

const cases = slugs.map(slug => [slug, parseInput(slug), parseOutput(slug)]);

describe('2D array', () => {
  test.each(cases)('%s', (slug, input, output) => {
    expect(solution(input)).toBe(output);
  });
});
