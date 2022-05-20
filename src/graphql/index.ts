import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Affiliation = {
  __typename?: "Affiliation";
  assign: Scalars["String"];
  location: Scalars["String"];
};

export type Basic = {
  __typename?: "Basic";
  affiliation: Affiliation;
  introduction: Scalars["String"];
  name: Name;
};

export type Bio = {
  __typename?: "Bio";
  action: Scalars["String"];
  date: Scalars["String"];
  title: Scalars["String"];
};

export type BlogPost = {
  __typename?: "BlogPost";
  title: Scalars["String"];
  url: Scalars["String"];
};

export type Meta = {
  __typename?: "Meta";
  blogPost?: Maybe<BlogPost>;
  platform: Array<Scalars["String"]>;
  presentation?: Maybe<Presentation>;
  source?: Maybe<Scalars["String"]>;
  stack: Array<Stack>;
  website?: Maybe<Scalars["String"]>;
};

export type Name = {
  __typename?: "Name";
  position: Scalars["String"];
  primary: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  content: Scalars["String"];
  header: PostHeader;
};

export type PostHeader = {
  __typename?: "PostHeader";
  date: Scalars["String"];
  emoji: Scalars["String"];
  id: Scalars["String"];
  tags: Array<Scalars["String"]>;
  title: Scalars["String"];
};

export type Presentation = {
  __typename?: "Presentation";
  title: Scalars["String"];
  url: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  basic: Basic;
  bio: Array<Bio>;
  postById: Post;
  posts: Array<PostHeader>;
  postsByTag: Array<PostHeader>;
  work: Work;
  works: Array<Work>;
};

export type QueryPostByIdArgs = {
  id: Scalars["String"];
};

export type QueryPostsByTagArgs = {
  tag: Scalars["String"];
};

export type QueryWorkArgs = {
  id: Scalars["String"];
};

export type Stack = {
  __typename?: "Stack";
  icon?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
};

export type Work = {
  __typename?: "Work";
  date: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["String"];
  imageUrl: Scalars["String"];
  title: Scalars["String"];
  workPage: WorkPage;
};

export type WorkPage = {
  __typename?: "WorkPage";
  detail: Scalars["String"];
  images?: Maybe<Array<Scalars["String"]>>;
  meta: Meta;
  title: Scalars["String"];
};

export type AboutQueryVariables = Exact<{ [key: string]: never }>;

export type AboutQuery = {
  __typename?: "Query";
  basic: {
    __typename?: "Basic";
    introduction: string;
    affiliation: { __typename?: "Affiliation"; location: string; assign: string };
  };
};

export type FeedQueryVariables = Exact<{ [key: string]: never }>;

export type FeedQuery = {
  __typename?: "Query";
  posts: Array<{ __typename?: "PostHeader"; id: string; title: string; date: string }>;
};

export type HomeQueryVariables = Exact<{ [key: string]: never }>;

export type HomeQuery = {
  __typename?: "Query";
  basic: { __typename?: "Basic"; name: { __typename?: "Name"; position: string; primary: string } };
  bio: Array<{ __typename?: "Bio"; date: string; title: string; action: string }>;
  posts: Array<{
    __typename?: "PostHeader";
    emoji: string;
    id: string;
    title: string;
    date: string;
    tags: Array<string>;
  }>;
  works: Array<{ __typename?: "Work"; id: string; imageUrl: string; title: string; date: string }>;
};

export type PostQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type PostQuery = {
  __typename?: "Query";
  postById: {
    __typename?: "Post";
    content: string;
    header: { __typename?: "PostHeader"; emoji: string; id: string; title: string; date: string; tags: Array<string> };
  };
};

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "PostHeader";
    emoji: string;
    id: string;
    title: string;
    date: string;
    tags: Array<string>;
  }>;
};

export type SitemapQueryVariables = Exact<{ [key: string]: never }>;

export type SitemapQuery = {
  __typename?: "Query";
  posts: Array<{ __typename?: "PostHeader"; id: string; date: string }>;
};

export type SlugQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type SlugQuery = { __typename?: "Query"; postById: { __typename?: "Post"; content: string } };

export type TagQueryVariables = Exact<{
  tag: Scalars["String"];
}>;

export type TagQuery = {
  __typename?: "Query";
  postsByTag: Array<{
    __typename?: "PostHeader";
    emoji: string;
    id: string;
    title: string;
    date: string;
    tags: Array<string>;
  }>;
};

export type TagsQueryVariables = Exact<{ [key: string]: never }>;

export type TagsQuery = { __typename?: "Query"; posts: Array<{ __typename?: "PostHeader"; tags: Array<string> }> };

export type WorkQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type WorkQuery = {
  __typename?: "Query";
  work: {
    __typename?: "Work";
    id: string;
    imageUrl: string;
    date: string;
    workPage: {
      __typename?: "WorkPage";
      title: string;
      detail: string;
      images?: Array<string> | null;
      meta: {
        __typename?: "Meta";
        website?: string | null;
        platform: Array<string>;
        source?: string | null;
        stack: Array<{ __typename?: "Stack"; icon?: string | null; name: string }>;
        blogPost?: { __typename?: "BlogPost"; title: string; url: string } | null;
        presentation?: { __typename?: "Presentation"; title: string; url: string } | null;
      };
    };
  };
};

export type WorksQueryVariables = Exact<{ [key: string]: never }>;

export type WorksQuery = {
  __typename?: "Query";
  works: Array<{ __typename?: "Work"; title: string; id: string; imageUrl: string; description: string; date: string }>;
};

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
`;

export function useAboutQuery(options?: Omit<Urql.UseQueryArgs<AboutQueryVariables>, "query">) {
  return Urql.useQuery<AboutQuery>({ query: AboutDocument, ...options });
}
export const FeedDocument = gql`
  query feed {
    posts {
      id
      title
      date
    }
  }
`;

export function useFeedQuery(options?: Omit<Urql.UseQueryArgs<FeedQueryVariables>, "query">) {
  return Urql.useQuery<FeedQuery>({ query: FeedDocument, ...options });
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
      tags
    }
    works {
      id
      imageUrl
      title
      date
    }
  }
`;

export function useHomeQuery(options?: Omit<Urql.UseQueryArgs<HomeQueryVariables>, "query">) {
  return Urql.useQuery<HomeQuery>({ query: HomeDocument, ...options });
}
export const PostDocument = gql`
  query post($id: String!) {
    postById(id: $id) {
      header {
        emoji
        id
        title
        date
        tags
      }
      content
    }
  }
`;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, "query">) {
  return Urql.useQuery<PostQuery>({ query: PostDocument, ...options });
}
export const PostsDocument = gql`
  query posts {
    posts {
      emoji
      id
      title
      date
      tags
    }
  }
`;

export function usePostsQuery(options?: Omit<Urql.UseQueryArgs<PostsQueryVariables>, "query">) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
}
export const SitemapDocument = gql`
  query sitemap {
    posts {
      id
      date
    }
  }
`;

export function useSitemapQuery(options?: Omit<Urql.UseQueryArgs<SitemapQueryVariables>, "query">) {
  return Urql.useQuery<SitemapQuery>({ query: SitemapDocument, ...options });
}
export const SlugDocument = gql`
  query slug($id: String!) {
    postById(id: $id) {
      content
    }
  }
`;

export function useSlugQuery(options: Omit<Urql.UseQueryArgs<SlugQueryVariables>, "query">) {
  return Urql.useQuery<SlugQuery>({ query: SlugDocument, ...options });
}
export const TagDocument = gql`
  query tag($tag: String!) {
    postsByTag(tag: $tag) {
      emoji
      id
      title
      date
      tags
    }
  }
`;

export function useTagQuery(options: Omit<Urql.UseQueryArgs<TagQueryVariables>, "query">) {
  return Urql.useQuery<TagQuery>({ query: TagDocument, ...options });
}
export const TagsDocument = gql`
  query tags {
    posts {
      tags
    }
  }
`;

export function useTagsQuery(options?: Omit<Urql.UseQueryArgs<TagsQueryVariables>, "query">) {
  return Urql.useQuery<TagsQuery>({ query: TagsDocument, ...options });
}
export const WorkDocument = gql`
  query work($id: String!) {
    work(id: $id) {
      id
      imageUrl
      date
      workPage {
        title
        detail
        meta {
          website
          platform
          stack {
            icon
            name
          }
          blogPost {
            title
            url
          }
          presentation {
            title
            url
          }
          source
        }
        images
      }
    }
  }
`;

export function useWorkQuery(options: Omit<Urql.UseQueryArgs<WorkQueryVariables>, "query">) {
  return Urql.useQuery<WorkQuery>({ query: WorkDocument, ...options });
}
export const WorksDocument = gql`
  query works {
    works {
      title
      id
      imageUrl
      description
      date
    }
  }
`;

export function useWorksQuery(options?: Omit<Urql.UseQueryArgs<WorksQueryVariables>, "query">) {
  return Urql.useQuery<WorksQuery>({ query: WorksDocument, ...options });
}
import { IntrospectionQuery } from "graphql";
export default {
  __schema: {
    queryType: {
      name: "Query",
    },
    mutationType: null,
    subscriptionType: null,
    types: [
      {
        kind: "OBJECT",
        name: "Affiliation",
        fields: [
          {
            name: "assign",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "location",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Basic",
        fields: [
          {
            name: "affiliation",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Affiliation",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "introduction",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Name",
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Bio",
        fields: [
          {
            name: "action",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "date",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BlogPost",
        fields: [
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "url",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Meta",
        fields: [
          {
            name: "blogPost",
            type: {
              kind: "OBJECT",
              name: "BlogPost",
              ofType: null,
            },
            args: [],
          },
          {
            name: "platform",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            },
            args: [],
          },
          {
            name: "presentation",
            type: {
              kind: "OBJECT",
              name: "Presentation",
              ofType: null,
            },
            args: [],
          },
          {
            name: "source",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "stack",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Stack",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: "website",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Name",
        fields: [
          {
            name: "position",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "primary",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Post",
        fields: [
          {
            name: "content",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "header",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "PostHeader",
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "PostHeader",
        fields: [
          {
            name: "date",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "emoji",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "tags",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            },
            args: [],
          },
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Presentation",
        fields: [
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "url",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Query",
        fields: [
          {
            name: "basic",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Basic",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "bio",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Bio",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: "postById",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Post",
                ofType: null,
              },
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "posts",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "PostHeader",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: "postsByTag",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "PostHeader",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "tag",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "work",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Work",
                ofType: null,
              },
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "works",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Work",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Stack",
        fields: [
          {
            name: "icon",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Work",
        fields: [
          {
            name: "date",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "description",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "imageUrl",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "workPage",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "WorkPage",
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "WorkPage",
        fields: [
          {
            name: "detail",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "images",
            type: {
              kind: "LIST",
              ofType: {
                kind: "NON_NULL",
                ofType: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            },
            args: [],
          },
          {
            name: "meta",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Meta",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "title",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "SCALAR",
        name: "Any",
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery;
