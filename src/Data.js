export const website = {
    title: "Folio",
}

export const me = {
    name: "Nicholas Galupi",
    description: "Hello! I am Nicholas Galupi! How's it goin'",
    profilePic: "/PFPfilter.png"
}

export const projects = [
    {
        name: 'Project1',
        category: 'full-stack',
        description: 'Describe the project! i fwhuew wexmweomcfom!'
    },
    {
        name: 'Project2',
        category: 'landing-page',
        description: 'Describe the project! i fwhuew wexmweomcfom!'
    },
    {
        name: 'Project3',
        category: 'mobile-apps',
        description: 'Describe the project! i fwhuew wexmweomcfom!'
    },
    {
        name: 'Project4',
        category: 'landing-page',
        description: 'Describe the project! i fwhuew wexmweomcfom!'
    },
    {
        name: 'Project5',
        category: 'landing-page',
        description: 'Describe the project! i fwhuew wexmweomcfom!'
    },
    {
        name: 'Project6',
        category: 'full-stack',
        description: 'Describe the project! i fwhuew wexmweomcfom!'
    },
    {
        name: 'Project7',
        category: 'landing-page',
        description: 'Describe the project! i fwhuew wexmweomcfom!'
    },
    {
        name: 'Project8',
        category: 'landing-page',
        description: 'Describe the project! i fwhuew wexmweomcfom!'
    }
]

export const reviews = [
    {
        review: 'WOW! This is a really great portfolio!',
        name: 'Nicholas Galupi',
        company: 'Portfolio Creator'
    },
    {
        review: 'WOW! This is a really great portfolio!',
        name: 'John Doe',
        company: 'Anonymous Decorator'
    },
    {
        review: 'WOW! This is a really great portfolio!',
        name: 'Jane Doe',
        company: 'Anonymous Builder'
    },
]

export const categories = [...new Set(projects.map(proj => proj.category))];