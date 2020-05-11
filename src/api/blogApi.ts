import ApolloClient, { gql, ApolloQueryResult } from 'apollo-boost';

export interface IAddress {
  get: {
    lat: string;
    lng: string;
  };
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  address: IAddress;
}

export interface IPost {
  id: string;
  title: string;
  body: string;
}

export interface IPosts {
  data: any;
}

const client = new ApolloClient({
  uri:
    process.env.REACT_APP_GRAPHQL_FAKE_API ||
    'https://graphqlzero.almansi.me/api',
});

export const getPosts = async () => {
  const GET_POSTS = gql`
    query($options: PageQueryOptions) {
      posts(options: $options) {
        data {
          id
          title
          body
        }
        meta {
          totalCount
        }
      }
    }
  `;

  try {
    const response: ApolloQueryResult<any> = await client.query({
      query: GET_POSTS,
    });

    console.log(response);

    const { data } = response;

    return data.posts.data;
  } catch (err) {
    throw err;
  }
};
