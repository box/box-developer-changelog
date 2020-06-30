# Contributing

All contributions are welcome to this project.

## Contributor License Agreement

Before a contribution can be merged into this project, please fill out the
Contributor License Agreement (CLA). Any new contributor will be prompted to
sign this agreement our CLA bot upon creating a pull request.

## Development

To contribute to this project we highly recommend reading our guides on
making contributions.

1. [Installation & setup](./docs/index.md)
1. [Notes for Box employees](./docs/boxers.md)
1. [The project structure](./docs/structure.md)
1. [Adding a new release note](./docs/add-release-note.md)
1. [Contributing a pull request](./docs/pull-request.md)
1. [Markdown style guide](./docs/markdown.md)

## Deployment

When pushing to the `main` or `staging` branch, GitHub actions will run the
linter and tests and will push the compiled content to the `en` and
`en-staging` branches respectively.

The pushing of these compiled branches will kick-off a rebuild of the developer
sites.

## Translation

Once every day a snapshot of the `en` branch is created on the
`en-snapshot` branch and imported into out our in-house translation system
(`Moji`) and sent off for translation.

Once the translation is completed, the translated content is pushed to the `jp`
branch, which then triggers a rebuild of the Japanese developer documentation.
