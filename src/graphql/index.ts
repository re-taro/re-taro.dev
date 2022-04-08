export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
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
  title: Scalars['String']
  when: Scalars['Int']
}

export type BlogPost = {
  __typename?: 'BlogPost'
  title: Scalars['String']
  url: Scalars['String']
}

export type Meta = {
  __typename?: 'Meta'
  blog_post?: Maybe<BlogPost>
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
  fetchBasic: Basic
  fetchBio: Array<Bio>
  fetchPost: Post
  fetchPosts: Array<Post>
  fetchWork: Work
  fetchWorks: Array<Work>
}

export type QueryFetchPostArgs = {
  id: Scalars['String']
}

export type QueryFetchWorkArgs = {
  id: Scalars['String']
}

export type Work = {
  __typename?: 'Work'
  id: Scalars['String']
  image_url: Scalars['String']
  title: Scalars['String']
  work_page: WorkPage
}

export type WorkPage = {
  __typename?: 'WorkPage'
  detail: Scalars['String']
  images?: Maybe<Array<Scalars['String']>>
  implementation: Scalars['Int']
  meta: Meta
  title: Scalars['String']
}

export type FetchBasicQueryVariables = Exact<{ [key: string]: never }>

export type FetchBasicQuery = {
  __typename?: 'Query'
  fetchBasic: {
    __typename?: 'Basic'
    introduction: string
    name: { __typename?: 'Name'; primary: string; position: string }
    affiliation: { __typename?: 'Affiliation'; assign: string; location: string }
  }
}

export type FetchBioQueryVariables = Exact<{ [key: string]: never }>

export type FetchBioQuery = {
  __typename?: 'Query'
  fetchBio: Array<{ __typename?: 'Bio'; when: number; title: string }>
}

export type FetchPostQueryVariables = Exact<{
  id: Scalars['String']
}>

export type FetchPostQuery = {
  __typename?: 'Query'
  fetchPost: { __typename?: 'Post'; title: string; id: string; emoji: string }
}

export type FetchPostsQueryVariables = Exact<{ [key: string]: never }>

export type FetchPostsQuery = {
  __typename?: 'Query'
  fetchPosts: Array<{ __typename?: 'Post'; title: string; id: string; emoji: string }>
}

export type FetchWorkQueryVariables = Exact<{
  id: Scalars['String']
}>

export type FetchWorkQuery = {
  __typename?: 'Query'
  fetchWork: {
    __typename?: 'Work'
    title: string
    id: string
    image_url: string
    work_page: {
      __typename?: 'WorkPage'
      title: string
      detail: string
      implementation: number
      images?: Array<string> | null
      meta: {
        __typename?: 'Meta'
        platform: string
        stack: string
        website?: string | null
        source?: string | null
        blog_post?: { __typename?: 'BlogPost'; title: string; url: string } | null
        presentation?: { __typename?: 'Presentation'; title: string; url: string } | null
      }
    }
  }
}

export type FetchWorksQueryVariables = Exact<{ [key: string]: never }>

export type FetchWorksQuery = {
  __typename?: 'Query'
  fetchWorks: Array<{
    __typename?: 'Work'
    title: string
    id: string
    image_url: string
    work_page: {
      __typename?: 'WorkPage'
      title: string
      detail: string
      implementation: number
      images?: Array<string> | null
      meta: {
        __typename?: 'Meta'
        platform: string
        stack: string
        website?: string | null
        source?: string | null
        blog_post?: { __typename?: 'BlogPost'; title: string; url: string } | null
        presentation?: { __typename?: 'Presentation'; title: string; url: string } | null
      }
    }
  }>
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
            name: 'when',
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
            name: 'blog_post',
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
            name: 'fetchBasic',
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
            name: 'fetchBio',
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
            name: 'fetchPost',
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
            name: 'fetchPosts',
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
            name: 'fetchWork',
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
            name: 'fetchWorks',
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
            name: 'image_url',
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
            name: 'work_page',
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
            name: 'implementation',
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
