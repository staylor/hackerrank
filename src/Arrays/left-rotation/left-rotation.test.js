import { getTestFiles, parseInputLines, parseOutputArray, strToArray } from '../../utils';
import solution from './solution';

const { inputDir, outputDir, slugs } = getTestFiles(__dirname);

const parseInput = slug => {
  const [size, data] = parseInputLines(inputDir, slug);
  const [, num] = strToArray(size);
  const arr = strToArray(data);
  return [arr, num];
};

const cases = slugs.map(slug => [slug, parseInput(slug), parseOutputArray(outputDir, slug)]);

describe('Left rotation', () => {
  test.each(cases)('%s', (slug, inputs, output) => {
    expect(solution(...inputs)).toStrictEqual(output);
  });
});
