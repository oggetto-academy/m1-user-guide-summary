module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://raw.githubusercontent.com/oggetto-academy/m1-user-guide-summary/master/favicon.ico'
        }]
    ],
    title: 'Конспект по Magento 1',
    description: '',
    base: '/m1-user-guide-summary/',
    themeConfig: {
        sidebar: [{
            title: 'Basic Configuration',
            collapsable: true,
            children: [
                'basic/store_admin',
                'basic/store_details',
                'basic/web_stores_views',
                'basic/industry_compliance'
            ]
        },
            {
                title: 'Product Catalog',
                collapsable: true,
                children: [
                    'product/navigation',
                    'product/categories',
                    'product/managing_attributes',
                    'product/creating_products',
                    'product/product_pricing',
                    'product/inventory',
                    'product/product_information'
                ]
            },
            {
                title: 'Search & SEO',
                collapsable: true,
                children: [
                    'search/tools',
                    'search/search_configuration',
                    'search/managing_terms',
                    'search/seo_optimization',
                    'search/url_redirects'
                ]
            },
            {
                title: 'Marketing & Promotions',
                collapsable: true,
                children: [
                    'promotions/promotions'
                ]
            }
        ]
    }
}


