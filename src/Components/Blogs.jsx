import { allPosts } from "@/lib/post_data";
import Link from "next/link";

const Blogs = async () => {
  const blogs = await allPosts();
  return (
    <section>
      <div className="grid grid-cols-1  gap-6 lg:grid-cols-3 md:grid-cols-2  xl:grid-cols-4 ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border p-4 rounded  bg-gray-50 shadow-xl"
          >
            <h1 className="font-bold text-lg">{blog.title}</h1>
            <p className="text-gray-600 mt-2">{blog?.body}</p>
            <Link href={`/posts/${blog.id}`}>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
