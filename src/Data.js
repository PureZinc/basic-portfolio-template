const templateData = {
    website: {
        title: "Folio",
    },
    me: {
        name: "Your Name",
        description: "Hello! I am a Cool Person! How's it goin'",
        profilePic: "/",
        websiteLink: "/"
    },
    projects: [
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
    ],
    reviews: [
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
}

const myData = {
    website: {
        title: "Galupidev",
    },
    me: {
        name: "Nicholas Galupi",
        description: "Hello! I am Nicholas Galupi! How's it goin'",
        profilePic: "/me/PFPfilter.png",
        websiteLink: "https://galupidev.vercel.app/"
    },
    projects: [
        {
            name: 'Project1',
            category: 'full-stack',
            description: 'Describe the project! i fwhuew wexmweomcfom!',
            image: '/'
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
    ],
    reviews: [
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
}

export const website = templateData.website;
export const me = templateData.me;
export const projects = templateData.projects;
export const reviews = templateData.reviews;
export const categories = [...new Set(templateData.projects.map((proj) => proj.category))];