const faunadb = require('faunadb');

exports.handler = async (event, context) => {
  const client = new faunadb.Client({secret: process.env.db_password});

  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
}
