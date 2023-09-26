module.exports = {
  semi: true,
  singleQuote: true,
  endOfLine: "lf",
  printWidth: 100,
  tabWidth: 2,
  overrides: [
    {
      files: "*.sol",
      options: {
        printWidth: 120,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
        explicitTypes: "always",
      },
    },
  ],
};
