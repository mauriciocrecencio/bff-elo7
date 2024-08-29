import { describe, expect, test } from 'vitest';

import { capitalizeWords, slugify } from '../../../utils';

describe('utils', () => {
  test('capitalizeWords', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('slugify', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('Hello-World-Im-Coming')).toBe('hello-world-im-coming');
    expect(slugify('Hello_World')).toBe('hello-world');
  });
});
