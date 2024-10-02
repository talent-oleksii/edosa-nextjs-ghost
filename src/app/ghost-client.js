import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "b33c063de2ed7799ce7a4202c1",
  version: "v5.0",
});
export async function getPosts() {
  return await api.posts
    .browse({
      include: ["tags", "authors"],
      limit: 10,
    })
    .catch((err) => {
      throw new Error(err);
    });
}
export async function getPages() {
  return await api.pages
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}
export async function getStaticProps() {
  const posts = await getPosts();

  posts.map((post) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    post.dateFormatted = new Intl.DateTimeFormat("default", options).format(
      new Date(post.published_at)
    );
  });
  return {
    props: {
      posts,
    },
  };
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
