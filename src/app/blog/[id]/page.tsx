import Head from "next/head";

export async function generateMetadata({ params }: any) {
  const ogImage = `https://og-image-generation-olive.vercel.app/og?title=${params.id}`;

  return {
    title: params.id,
    openGraph: {
      title: params.id,
      url: "./",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: params.id,
        },
      ],
    },
  };
}

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
