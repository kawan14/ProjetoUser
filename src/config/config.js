// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-8fe906f37e1bcfc237a4c71ea1871a59c923c4bd.c3xfjhtgcfo7.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '$K5WK1b%<m)EohN&0N8eM={#N>1?YgtR'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}