const faunadb = require('faunadb');

export async function handler(event, context) {
  const client = new faunadb.Client({secret: process.env.db_password});

  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
}
