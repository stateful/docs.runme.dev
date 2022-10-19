import { Handlers, PageProps } from "$fresh/server.ts";
import {
  gql,
  request,
} from "https://raw.githubusercontent.com/ArnabXD/graphql-request/temp/mod.ts";

import { format } from "https://deno.land/x/date_fns@v2.15.0/index.js";
import Layout from "../components/Layout.tsx";

export const query = gql`
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

interface LinkyProps {
  name: string;
  href: string;
  classStr?: string
}
export const Linky = ({ name, href, classStr }: LinkyProps) => {
  return (
    <a href={href}>
      <p className={`font-medium hover:underline hover:text-covey-500 ${classStr}`}>
        {name}
      </p>
    </a>
  );
};


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

export default function Blog({ data }: PageProps) {
  const posts: Article[] = data?.posts;
  if (!data || !posts) {
    return <h1>Articles not found</h1>;
  }
  return (
    <Layout>
      <div class="text-black pb-24">
        <div className="relative py-24 mb-12 font-bold text-center">
          <h1 id="fluid-typography-blog-header" class="vscode-bolt">Blog</h1>
        </div>
        <div className="flex flex-col grid-cols-2 gap-10 mt-20 md:grid px-4 pb-36 max-w-[1440px] mx-auto">
          {posts.map((post) => {
            const slug = `https://stateful.com/blog/${post?.slug}`;
            return (
              <div key={post?.id} className="mb-24 ">
                <a href={slug}>
                  <div className="cursor-pointer relative h-[250px] bg-blue-500 xs:h-[250px] sm:h-[300px] md:h-[200px] lg:h-[325px] bg-white shadow-2xl">
                    {post.cover?.url && (
                      <img
                        src={post?.cover?.url}
                        alt={post?.title}
                        className="object-cover rounded-md absolute w-full h-full"
                      />
                    )}
                  </div>
                </a>
                <div className="w-12 mt-10 border-t-4 rounded-full border-covey-500" />
                <div className="text-[#516C8C] font-medium my-4">
                  {format(new Date(post.date), "LLLL d, Y", {})}
                </div>
                <a href={slug}>
                  <p className="font-semibold line-clamp-2 text-[20px] h-16 text-heading tracking-[0.035em] hover:underline">
                    {post?.title}
                  </p>
                </a>
                <div className="line-clamp-3 text-[18px] h-28">
                  {post?.preview}
                </div>
                {post?.authors?.length > 0 && (
                  <div className="flex items-center mt-4 space-x-2">
                    <div className="relative w-10 h-10">
                      <img
                        src={post?.authors?.[0]?.photo?.url}
                        className="rounded-full absolute w-full h-full"
                        alt={post?.authors?.[0]?.name}
                      />
                    </div>
                    <div className="font-semibold leading-none text-[#516C8C]">
                      <Linky
                        name={post?.authors?.[0]?.name}
                        href={post.authors?.[0]?.url}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
