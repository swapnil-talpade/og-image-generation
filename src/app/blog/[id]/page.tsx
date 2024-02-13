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

const BlogDetails = () => {
  return <div>Blog Details</div>;
};

export default BlogDetails;
