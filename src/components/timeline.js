import parseWithOptions from "date-fns/esm/fp/parseWithOptions/index.js";
import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhoto from "../hooks/use-photos";
import Post from "./post";
const Timeline = () => {
  const { photos } = usePhoto();

 
  return (
    <div className="container col-span-2">
        {!photos ? (
            <>
                <Skeleton width={640} height={400} className='mb-5' />
            </>
        ) : photos?.length > 0 ? (
            photos.map((content) => <Post key={content.docId} content={content} />)
        ) : (
            <p className="text-center text-l"> Follow to see photos</p>
        )}
    </div>
  );
};

export default Timeline;
