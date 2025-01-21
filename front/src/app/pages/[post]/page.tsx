"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPostById } from "@/app/api/post";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faArrowLeft,
  faPersonDress,
  faRestroom,
} from "@fortawesome/free-solid-svg-icons";
import Interactions from "@/app/components/common/Interactions";
import Link from "next/link";
import Graph from "@/app/components/common/Graphs";
interface Post {
  id: string;
  text: string;
  created_at: string;
  username: string;
  likes: number;
  comments: number;
  shares: number;
  media: string;
  audiencia: number;
  gen: string;
  location: string;
  sent_prob: string;
}

const Page = () => {
  const id = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPostById(String(id.post));
      const data = await response;
      setPost(data);
      setImages(data.media.split(","));
    };
    fetchPost();
  }, []);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(date);
  }
  return (
    <div>
        <div>
            <div className="container mx-auto p-4 fixed">
             <Link href="/">
                <span className="text-white">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
                     <span className="ml-2">Back</span>
                     </span>
              </Link>
            </div>
        </div>
      <div className=" bg-black   text-white">
        <div className="container pt-3  flex flex-row-reverse">
          <aside className="w-1/4 h-[510px] mt-5 border-2 mr-8 rounded-xl border-gray-700 p-4">
            <h2 className="text-xl font-bold mb-4">Información</h2>
            <ul className="space-y-1">
              <li className="flex space-x-2 ">
                <span>Ubicación: </span>
                <span className="text-gray-500">{post?.location}</span>
              </li>
              <li className="flex space-x-2">
                <span>Genre:</span>
                {post?.gen === "F" ? (
                  <span className="space-x-2">
                    <FontAwesomeIcon
                      icon={faPersonDress}
                      className="text-gray-500"
                    />
                    <span className="text-gray-500">Femenino</span>
                  </span>
                ) : post?.gen == "M" ? (
                  <span className="space-x-2">
                    <FontAwesomeIcon
                      icon={faPerson}
                      className="text-gray-500"
                    />
                    <span className="text-gray-500">Masculino</span>
                  </span>
                ) : (
                  <span className="space-x-2">
                    <FontAwesomeIcon
                      icon={faRestroom}
                      className="text-gray-500"
                    />
                    <span className="text-gray-500">Sin definir</span>
                  </span>
                )}
              </li>
            </ul>
            
                <Graph sentimientos={post?.sent_prob }/>    
            
          </aside>

          <main className="flex-grow p-6">
            <div className="max-w-xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-bold">{post?.username}</h2>
                <p className="text-sm text-gray-500">
                  {post?.created_at ? formatDate(post.created_at) : ""}
                </p>
              </div>
              <div>
                {images.map((image, index) => (
                  <div key={index}>
                    {images.length > 1 ? (
                        <Image
                        src={image}
                        alt="post image"
                        width={400}
                        height={250}
                        className="rounded-lg object-cover w-full border-2 border-gray-700"
                        />
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="p-4">
                <p className="mb-2">{post?.text}</p>
                <p className="text-sm text-gray-500">
                  {post?.audiencia} Visualizaciones
                </p>
                <Interactions
                  likes={post?.likes ?? 0}
                  comments={post?.comments ?? 0}
                  shares={post?.shares ?? 0}
                />
              </div>
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
