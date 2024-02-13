import Head from "next/head";

const BlogDetails = ({ params }: any) => {
  const imgUrl = `https://og-image-generation-olive.vercel.app/_static/blog-og-card.png?title=${params.title}`;

  return (
    <div>
      <Head>
        <title>{params.title}</title>
        <meta property="og:image" content={imgUrl} />
      </Head>
      Blog Details
    </div>
  );
};

export default BlogDetails;
