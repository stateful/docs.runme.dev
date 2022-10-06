import { Handlers, PageProps } from "$fresh/server.ts";
import {
  gql,
  request,
} from "https://raw.githubusercontent.com/ArnabXD/graphql-request/temp/mod.ts";

import { format } from "https://deno.land/x/date_fns@v2.15.0/index.js";
import { h } from "preact";

const query = gql`
query Posts() {
  posts (orderBy: date_DESC, where: {stateful:true, forRunmeSite: true}, stage: PUBLISHED, ) {
    id
    title
    preview
    slug
    cover {
      id
      url
    }
    authors {
      id
      name
      url
      photo {
        url
      }
    }
    date
    marquee
    stateful
  }
}
`;

interface Photo {
  url: string;
}

interface Author {
  id: string;
  name: string;
  url: string;
  photo: Photo;
}

interface Article {
  id: string;
  title: string;
  preview: string;
  slug: string;
  cover: {
    id: string;
    url: string;
  };
  authors: [Author];
  date: string;
  marquee: boolean;
  stateful: boolean;
}

export const handler: Handlers<Article[] | null> = {
  async GET(_, ctx) {
    const resp = await request(
      "https://api-us-west-2.graphcms.com/v2/cksds5im94b3w01xq4hfka1r4/master",
      query
    );
    if (resp.status === 404) {
      return ctx.render(null);
    }

    return ctx.render(resp);
  },
};
const Post = ({ post }: { post: Article }) => {
  return (
    <a>
      <div className="flex flex-col rounded border-gray-500 py-2 px-4 space-y-2">
        <img src={post.cover.url} class="rounded-lg shadow-xl" />
        <div className="w-12 mt-10 border-t-4 rounded-full border-[#EF2357]" />
        <div class="space-y-2">
          <div>{format(new Date(post.date), "LLLL d, Y", {})}</div>
          <a
            href={`https://stateful.com/blog/${post.slug}`}
            class="text-xl font-medium hover:text-blue-500 cursor-pointer"
          >
            {post.title}
          </a>
          <div class="text-gray-300 text-xl">{post.preview}</div>
          <div class="flex flex-row space-x-1">
            {post.authors.map((author) => {
              return (
                <div class="flex flex-row space-x-2 items-center">
                  <div>
                    <img class="rounded-2xl w-8 h-8" src={author.photo.url} />
                  </div>
                  <a class="hover:text-blue-500" href={author.url}>
                    {author.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </a>
  );
};

export default function Blog({ data }: PageProps) {
  if (!data) {
    return <h1>Articles not found</h1>;
  }

  return (
    <>
      <div class="max-w-lg mx-auto min-h-screen">
        <div class="text-center text-4xl py-12">Blog</div>
        <div class="flex flex-col space-y-6">
          {data.posts.map((post: Article) => {
            return <Post post={post} />;
          })}
        </div>
      </div>
    </>
  );
}
