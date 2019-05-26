const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const hash = require ('../auth/hash')

module.exports = {
    createAdmin,
    adminExists,
    getAdminById,
    getAdminByName

}

function createAdmin (adminname, password, db = connection) {
    return adminExists(adminname, db)
    .then(exists => {
        if (exisits) {
            return Promise.reject(new Error('Admin exsists'))
        }
    })
    .then(() => hash.generate(password))
    .then(passwordHash => {
        return db('admins').insert({ adminname, hash: passwordHash})
    })
}

function adminExists(adminname, db = connection)
return db ('admins')
.count('id as n')
.where('adminname', adminname )
.then(count => {
    return count[0].n > 0
})

function getAdminById (id, db = connection) {
    return db('admins')
    .select('id', 'adminname')
    .where('id', id)
    .first()
}

function getAdminByName (adminname, db = connection) {
    return db('admins')
    .select()
    .where('adminname', adminname)
    .first()
}

function deleteAdmnin (id, db = connection) {
    return db('admins')
    .where('id', id)
    .del()
}
