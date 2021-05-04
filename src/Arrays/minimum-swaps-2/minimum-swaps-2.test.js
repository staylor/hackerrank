import { getTestFiles, parseInputLines, parseOutputInt, strToArray } from '../../utils';
import solution from './solution';

const { inputDir, outputDir, slugs } = getTestFiles(__dirname);

const parseInput = slug => {
  const [, data] = parseInputLines(inputDir, slug);
  return strToArray(data);
};

const cases = slugs.map(slug => [slug, parseInput(slug), parseOutputInt(outputDir, slug)]);

describe('Minimum Swaps 2', () => {
  test.each(cases)('%s', (slug, input, output) => {
    expect(solution(input)).toStrictEqual(output);
  });
});
