import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Affiliation = {
  __typename?: 'Affiliation'
  assign: Scalars['String']
  location: Scalars['String']
}

export type Basic = {
  __typename?: 'Basic'
  affiliation: Affiliation
  introduction: Scalars['String']
  name: Name
}

export type Bio = {
  __typename?: 'Bio'
  action: Scalars['String']
  date: Scalars['String']
  title: Scalars['String']
}

export type BlogPost = {
  __typename?: 'BlogPost'
  title: Scalars['String']
  url: Scalars['String']
}

export type Meta = {
  __typename?: 'Meta'
  blogPost?: Maybe<BlogPost>
  platform: Scalars['String']
  presentation?: Maybe<Presentation>
  source?: Maybe<Scalars['String']>
  stack: Scalars['String']
  website?: Maybe<Scalars['String']>
}

export type Name = {
  __typename?: 'Name'
  position: Scalars['String']
  primary: Scalars['String']
}

export type Post = {
  __typename?: 'Post'
  date: Scalars['String']
  emoji: Scalars['String']
  id: Scalars['String']
  title: Scalars['String']
}

export type Presentation = {
  __typename?: 'Presentation'
  title: Scalars['String']
  url: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  basic: Basic
  bio: Array<Bio>
  post: Post
  posts: Array<Post>
  work: Work
  works: Array<Work>
}

export type QueryPostArgs = {
  id: Scalars['String']
}

export type QueryWorkArgs = {
  id: Scalars['String']
}

export type Work = {
  __typename?: 'Work'
  date: Scalars['String']
  id: Scalars['String']
  imageUrl: Scalars['String']
  title: Scalars['String']
  workPage: WorkPage
}

export type WorkPage = {
  __typename?: 'WorkPage'
  detail: Scalars['String']
  images?: Maybe<Array<Scalars['String']>>
  meta: Meta
  title: Scalars['String']
}

export type AboutQueryVariables = Exact<{ [key: string]: never }>

export type AboutQuery = {
  __typename?: 'Query'
  basic: {
    __typename?: 'Basic'
    introduction: string
    affiliation: { __typename?: 'Affiliation'; location: string; assign: string }
  }
}

export type HomeQueryVariables = Exact<{ [key: string]: never }>

export type HomeQuery = {
  __typename?: 'Query'
  basic: { __typename?: 'Basic'; name: { __typename?: 'Name'; position: string; primary: string } }
  bio: Array<{ __typename?: 'Bio'; date: string; title: string; action: string }>
  posts: Array<{ __typename?: 'Post'; emoji: string; id: string; title: string; date: string }>
  works: Array<{ __typename?: 'Work'; id: string; imageUrl: string; title: string }>
}

export type WorksQueryVariables = Exact<{ [key: string]: never }>

export type WorksQuery = {
  __typename?: 'Query'
  works: Array<{
    __typename?: 'Work'
    title: string
    id: string
    imageUrl: string
    date: string
    workPage: { __typename?: 'WorkPage'; detail: string }
  }>
}

export const AboutDocument = gql`
  query about {
    basic {
      introduction
      affiliation {
        location
        assign
      }
    }
  }
`

export function useAboutQuery(options?: Omit<Urql.UseQueryArgs<AboutQueryVariables>, 'query'>) {
  return Urql.useQuery<AboutQuery>({ query: AboutDocument, ...options })
}
export const HomeDocument = gql`
  query home {
    basic {
      name {
        position
        primary
      }
    }
    bio {
      date
      title
      action
    }
    posts {
      emoji
      id
      title
      date
    }
    works {
      id
      imageUrl
      title
    }
  }
`

export function useHomeQuery(options?: Omit<Urql.UseQueryArgs<HomeQueryVariables>, 'query'>) {
  return Urql.useQuery<HomeQuery>({ query: HomeDocument, ...options })
}
export const WorksDocument = gql`
  query works {
    works {
      title
      id
      imageUrl
      date
      workPage {
        detail
      }
    }
  }
`

export function useWorksQuery(options?: Omit<Urql.UseQueryArgs<WorksQueryVariables>, 'query'>) {
  return Urql.useQuery<WorksQuery>({ query: WorksDocument, ...options })
}
import { IntrospectionQuery } from 'graphql'
export default {
  __schema: {
    queryType: {
      name: 'Query'
    },
    mutationType: null,
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'Affiliation',
        fields: [
          {
            name: 'assign',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'location',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Basic',
        fields: [
          {
            name: 'affiliation',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Affiliation',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'introduction',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Name',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Bio',
        fields: [
          {
            name: 'action',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'date',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'title',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'BlogPost',
        fields: [
          {
            name: 'title',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'url',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Meta',
        fields: [
          {
            name: 'blogPost',
            type: {
              kind: 'OBJECT',
              name: 'BlogPost',
              ofType: null
            },
            args: []
          },
          {
            name: 'platform',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'presentation',
            type: {
              kind: 'OBJECT',
              name: 'Presentation',
              ofType: null
            },
            args: []
          },
          {
            name: 'source',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          },
          {
            name: 'stack',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'website',
            type: {
              kind: 'SCALAR',
              name: 'Any'
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Name',
        fields: [
          {
            name: 'position',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'primary',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Post',
        fields: [
          {
            name: 'date',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'emoji',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'title',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Presentation',
        fields: [
          {
            name: 'title',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'url',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'basic',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Basic',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'bio',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Bio',
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: 'post',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Post',
                ofType: null
              }
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any'
                  }
                }
              }
            ]
          },
          {
            name: 'posts',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Post',
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: 'work',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Work',
                ofType: null
              }
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any'
                  }
                }
              }
            ]
          },
          {
            name: 'works',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Work',
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'Work',
        fields: [
          {
            name: 'date',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'imageUrl',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'title',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'workPage',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'WorkPage',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'WorkPage',
        fields: [
          {
            name: 'detail',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          },
          {
            name: 'images',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Any'
                }
              }
            },
            args: []
          },
          {
            name: 'meta',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Meta',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'title',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any'
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'SCALAR',
        name: 'Any'
      }
    ],
    directives: []
  }
} as unknown as IntrospectionQuery
