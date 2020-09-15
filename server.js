const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const baseURL = `https://random-persons.herokuapp.com`

const users = fetch(`${baseURL}/users`).then(res => res.json()).then(json => json.data);

const paginate = (data, page, size) => {
  const end = page * size;
  const begin = end - size;
  return data.slice(begin, end);
}

const resolvers = {
  Query: {
    search: (_, { name, age, page=1, size=50 }) => users.then(data => {
        let users = Object.assign([], data);

        if (name !== undefined) {
          users = data.filter((user) => user.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
        } else if (age !== undefined) {
          users = data.filter((user) => user.age === age);
        }

        const totalPage = Math.ceil(users.length / size);

        users = paginate(users, page, size);

        return {
          currentPage: page,
          size: size,
          totalPages: totalPage,
          users: users
        }
    })
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
})

server.start(() => console.log(`Servidor está rodando em http://localhost:4000`))
