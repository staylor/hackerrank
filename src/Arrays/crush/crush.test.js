import { getTestFiles, parseInputLines, parseOutputInt, strToArray } from '../../utils';
import solution from './solution';

const { inputDir, outputDir, slugs } = getTestFiles(__dirname);

const parseInput = slug => {
  const [size, ...lines] = parseInputLines(inputDir, slug);
  const [n] = strToArray(size);
  const queries = lines.map(strToArray);
  return [n, queries];
};

const cases = slugs.map(slug => [slug, parseInput(slug), parseOutputInt(outputDir, slug)]);

describe('Crush', () => {
  test.each(cases)('%s', (slug, inputs, output) => {
    expect(solution(...inputs)).toStrictEqual(output);
  });
});
