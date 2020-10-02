export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f77321e90b2832dbba103c6',
                  title: 'Sanity Studio',
                  name: 'mz-sanity-studio',
                  apiId: '0c4880e0-fa09-406c-b4f2-31b5b4453fad'
                },
                {
                  buildHookId: '5f77321e8bcb6826868b9dc4',
                  title: 'Blog Website',
                  name: 'mz-sanity',
                  apiId: '864f3c5c-d2b0-4a65-9680-7d8d1f70ec64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MZOG/mz-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://mz-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
