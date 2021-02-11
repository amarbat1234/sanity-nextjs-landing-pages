export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6024adc899a135adec1af429',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v73k1udz',
                  apiId: '06a9769b-115e-435f-9102-c6e0fb8f7ccc'
                },
                {
                  buildHookId: '6024adc85db2b1adbb4b2bc0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rb2qiict',
                  apiId: 'ec6c2377-3c55-405b-8918-caa9eb5aa740'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amarbat1234/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rb2qiict.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
