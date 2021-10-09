export default {
  widgets: [
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
                  buildHookId: '61611bfd7d2d698a065e1a41',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-atw6y7os',
                  apiId: '15d85b89-4af5-4261-aaaf-327c655639d0'
                },
                {
                  buildHookId: '61611bfda3152080932a63f4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hf3ioj44',
                  apiId: '16d4a87c-d67f-424a-ace1-ca8e25bb2e84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ninahorne/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hf3ioj44.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
