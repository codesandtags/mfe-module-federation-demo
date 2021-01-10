# Module Federation Demo for Micro Frontends

## Motivation

After review in multiples articles, websites and trending topics talking about Webpack Module Federation, I've decided to review in details this topic and gain my own experience. The result of this project is based on [Microfrontends course by Stephen Grider](https://www.udemy.com/course/microfrontend-course). This project intends to support some part of the main challenges in Micro frontends:

- Runtime integration
- Shared dependencies
- Independent projects
- Shared styles
- Efficient resolution of dependencies and optimized bundles
- Deployment
- Authentication
- Monorepo

## Demo

[Here](https://d2e6dmf2adhf2n.cloudfront.net/) you will find the demo. This project has been deployed in AWS S3 and it's using cloudfront.

### AWS

- Bucket Name: `mfe-module-federation-demo`

## How it works?

This project has the next structure:

- .github/workflows: Contains the Github Actions or workflows to automate the deployment process in AWS.
- auth: MFE responsible to do the login / signup
- dashboard: MFE responsible to show information once the user is logged.
- marketing: MFE responsible to show public facing information.
- container: Orchestrate all MFE. This project get tha remoteEntry.js file for each MFE and assembly the functionalities. This project also is incharge to handle the routing and events to childs.

## Resources

|                                                        Resource                                                        | Description                                                                                                                                                                           |
| :--------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                        [Module Federation](https://webpack.js.org/concepts/module-federation/)                         | Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually. |
|                                  [Micro Front-ends](https://micro-frontends-es.org/)                                   | The basic teory to understand Micro Frontends                                                                                                                                         |
| [Github Actions](https://docs.github.com/es/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions) | Github actions to add CI / CD to projects                                                                                                                                             |

## Contact

Feel free to contact me at:

- [Linkedin](https://www.linkedin.com/in/edwintorresdeveloper/)
- [Gmail](mailto:codesandtags@gmail.com)
- [Github](https://github.com/codesandtags)
