/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
*

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    //query4 nodes in creating pages
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});

//gatsby api create pagess from data

exports.createPages = ({ actions,graphql}) => {
    const { createPage } = actions;

    const get<ContentTypeName>s = makeRequest(graphql, `
    {
        allStrapi<ContentTypeName> {
            edges 
            {
                node {
                    id
                    <field2>
                }
            }
        }
    }
    `).then(result => {
        //pages from each article
        result.data.allStrapi<ContentTypeName>.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.<field2>}`,
                component: path.resolve(`src/templates/<Template>.js`),
                context: {
                    id: node.id, 
                },
            })
        })
    });

    const get<ContentType2Name>s = makeRequest(graphql, `
    {
        allStrapi<ContentType2Name> {
            edges
            {
                node {
                    id
                    <field2>
                }
            }
        }
    }
    `).then(result => {
        //pages 4 each author
        result.data.allStrapi<ContentType2Name>.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.<field2>}`,
                component: path.resolve(`src/templates/<Template2>.js`),
                context: {
                    id: node.id,
                },
            })
        })
    }); 
    //query 4 posts to use in creatin pages
    return Promise.all([
        get<ContentTypeName>s,
       get<ContentType2Name>s
    ])
};

 */