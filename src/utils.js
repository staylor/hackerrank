import fs from 'fs';
import path from 'path';

export function getTestFiles(dir) {
  const testDir = path.join(dir, 'testcases');
  const inputDir = path.join(testDir, 'input');
  const outputDir = path.join(testDir, 'output');
  const files = fs.readdirSync(inputDir);
  const slugs = files.map(f => path.basename(f, '.txt'));

  return { inputDir, outputDir, slugs };
}

export function strToArray(str) {
  return str.split(' ').map(i => parseInt(i, 10));
}

export function parseInputLines(inputDir, slug) {
  const input = fs.readFileSync(path.join(inputDir, `${slug}.txt`), 'utf-8');
  return input
    .trim()
    .split('\n')
    .filter(f => f);
}

export function parseOutputTrimmed(outputDir, slug) {
  const output = fs.readFileSync(path.join(outputDir, `${slug.replace('in', 'out')}.txt`), 'utf-8');
  return output.trim();
}

export function parseOutputInt(outputDir, slug) {
  return parseInt(parseOutputTrimmed(outputDir, slug), 10);
}

export function parseOutputLines(outputDir, slug) {
  return parseOutputTrimmed(outputDir, slug).split('\n');
}

export function parseOutputArray(outputDir, slug) {
  return parseOutputTrimmed(outputDir, slug)
    .split(' ')
    .map(i => parseInt(i, 10));
}
