
const getInstructions = () => `
### What to do next?

The changes you have made will soon be reflected.
`;

module.exports = {
  async instructions(context, github) {
    const pr = context.payload.issue || context.payload.pull_request;
    const { number } = pr;

    await github.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: number,
      body: getInstructions(),
    });
  }
};

