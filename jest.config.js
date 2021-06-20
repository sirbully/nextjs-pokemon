module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/pages/(.*)': '<rootDir>./pages/$1',
    '@/components/(.*)': '<rootDir>./components/$1',
    '@/hooks/(.*)': '<rootDir>./hooks/$1',
    '@/styles/(.*)': '<rootDir>./styles/$1',
    '@/utils/(.*)': '<rootDir>./utils/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};
