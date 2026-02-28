export interface DocItem {
    title: string
    href: string
}

export interface DocCategory {
    title: string
    items: DocItem[]
}

export const docCategories: DocCategory[] = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Introduction', href: '/docs' },
            { title: 'Getting Started', href: '/docs/getting-started' },
            { title: 'Installation', href: '/docs/installation' },
        ]
    },
    {
        title: 'Configuration',
        items: [
            { title: 'Configuration Guide', href: '/docs/configuration' },
            { title: 'Secret Management', href: '/docs/secrets' },
            { title: 'First Deployment', href: '/docs/first-deployment' },
        ]
    },
    {
        title: 'Reference',
        items: [
            { title: 'CLI Reference', href: '/docs/cli-reference' },
            { title: 'Troubleshooting', href: '/docs/troubleshooting' },
        ]
    },
    {
        title: 'Comparisons',
        items: [
            { title: 'vs Kamal', href: '/docs/vs-kamal' },
        ]
    }
]

export const flatDocs: DocItem[] = docCategories.flatMap(category => category.items)
