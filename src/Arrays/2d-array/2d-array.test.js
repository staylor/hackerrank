import { getTestFiles, parseInputLines, parseOutputInt, strToArray } from '../../utils';
import solution from './solution';

const { inputDir, outputDir, slugs } = getTestFiles(__dirname);

const parseInput = slug => parseInputLines(inputDir, slug).map(strToArray);

const cases = slugs.map(slug => [slug, parseInput(slug), parseOutputInt(outputDir, slug)]);

describe('2D array', () => {
  test.each(cases)('%s', (slug, input, output) => {
    expect(solution(input)).toBe(output);
  });
});
