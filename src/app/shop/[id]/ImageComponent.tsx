"use client";
import React, { useState } from "react";
import Image from "next/image";
const ImageComponent = ({ data }: any) => {
  const [currentFeatured, setCurrentFeatured] = useState(
    data.product.images.edges[0].node.url,
  );

  const handleClickImage = (item: any) => {
    setCurrentFeatured(item.node.url);
  };
  return (
    <>
      <div className="flex flex-col gap-y-5">
        {data.product.images.edges.map((item: any, index: number) => (
          <div
            key={index}
            className="relative h-16 w-16 cursor-pointer rounded hover:scale-105"
            onClick={() => handleClickImage(item)}
          >
            <Image
              className="rounded"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              src={item.node.url}
              alt={"test"}
            />
          </div>
        ))}
      </div>
      <div className="relative h-80 w-6/12 rounded">
        <Image
          className="rounded"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          src={currentFeatured}
          alt={"test"}
        />
      </div>
    </>
  );
};

export default ImageComponent;
