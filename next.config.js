module.exports = {
  generateBuildId: async () => {
    return process.env.COMMIT_REF || 'build';
  },
  target: 'serverless',
  cssModules: true
};
