module.exports = {
  "*": "prettier --ignore-unknown --write",
  "**/*.scss": "stylelint --fix",
  // "**/*.ts?(x)": (filenames) =>
  //   `next lint --fix --file ${filenames
  //     .map((file) => file.split(process.cwd())[1])
  //     .join(" --file ")}`,
  "**/*.ts?(x)": "eslint --fix",
};
