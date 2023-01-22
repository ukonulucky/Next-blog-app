"use client";
import Image from "next/image";
import React from "react";
import urlFor from "../lib/useFor";

type Props = {
  posts: Post[];
};


function BlogList({ posts }: Props) {
  console.log(posts);
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer  ">
            <div
              className="relative w-full h-80 drop-shadow-xl group-hover:scale-105
                       transition-transform
                       duration-200 ease-out
                       "
            >
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black background-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-Us", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-col md:flex-col gap-y-2 md:gap-x-2 item-center">
                  {post.categories.map((category) => (
                    <div className="bg-[#F7AB0A] text-center text-black px-3 py- rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div> 
            </div>
            <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                {/* <div className="text-gray-500">{post.body.map(i => {
                    i.children?.map(k:any => <p>
                            {k.text}
                        </p>
                    )
                })}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
