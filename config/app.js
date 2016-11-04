module.exports = {
    "app": {
        "port": "3000",
        "name": "Save To Drive",
        "domain": "savetodrive.me"
    },
    database: {
        mongo: {
            host: "mongodb://localhost/savetodrive"
        }
    },
    auth: {
        jwt: {
            secret: 'wqaML5KIBh',
            session: {
                session: false,
                expiresIn: 10,
            }
        }
    }
}