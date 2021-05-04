import { getTestFiles, parseInputLines, parseOutputLines, strToArray } from '../../utils';
import solution from './solution';

const { inputDir, outputDir, slugs } = getTestFiles(__dirname);

const parseInput = slug => {
  const [, ...lines] = parseInputLines(inputDir, slug);

  const nums = [];
  for (let j = 1; j < lines.length; j += 2) {
    nums.push(strToArray(lines[j]));
  }
  return nums;
};

const parseOutput = slug =>
  parseOutputLines(outputDir, slug).map(s => (s.indexOf(' ') === -1 ? parseInt(s, 10) : s));

const cases = slugs.map(slug => [slug, parseInput(slug), parseOutput(slug)]);

describe('New Year Chaos', () => {
  test.each(cases)('%s', (slug, inputs, output) => {
    inputs.forEach((input, i) => {
      expect(solution(input)).toStrictEqual(output[i]);
    });
  });
});
