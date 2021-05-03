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
  const [, ...lines] = input
    .trim()
    .split('\n')
    .filter(l => l);

  const nums = [];
  for (let j = 1; j < lines.length; j += 2) {
    nums.push(lines[j].split(' ').map(i => parseInt(i, 10)));
  }
  return nums;
};

const parseOutput = slug => {
  const output = fs.readFileSync(path.join(outputDir, `${slug.replace('in', 'out')}.txt`), 'utf-8');
  return output
    .trim()
    .split('\n')
    .map(s => (s.indexOf(' ') === -1 ? parseInt(s, 10) : s));
};

const cases = slugs.map(slug => [slug, parseInput(slug), parseOutput(slug)]);

describe('New Year Chaos', () => {
  test.each(cases)('%s', (slug, inputs, output) => {
    inputs.forEach((input, i) => {
      expect(solution(input)).toStrictEqual(output[i]);
    });
  });
});
