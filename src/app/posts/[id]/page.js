import { getPost } from "@/lib/getPost";
import Link from "next/link";

const Details = async ({ params }) => {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold my-6">Post Details</h1>
      <div className="bg-gray-300 md:w-1/2 space-y-4 rounded-md p-4">
        <p className="text-xl font-semibold">{post?.title}</p>
        <p>{post?.body}</p>
        <Link href={`/`} passHref>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
