export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6223d26b7cd5726ef78f7129',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1s4w7qmq',
                  apiId: '5db6681b-941a-4a74-9d3d-8cae255cd378'
                },
                {
                  buildHookId: '6223d26b90d3ce5a4e2c3c2e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fstmeq7i',
                  apiId: '78d607b6-405b-46be-8fbd-4eacafa3a4b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ilyris/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fstmeq7i.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
