import React from "react";
import { IHeaderComment } from "../../interfaces";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const HeaderComment: React.FC<IHeaderComment> = ({ user, duration, currentUser }) => {
  return (
    <div className="col-start-1 col-end-5 row-start-1 row-end-2 flex items-center md:col-start-2 md:col-end-5 md:px-2">
      <picture className="col-start-1 col-end-2 w-8 h-8 flex-shrink-0 self-center">
        <source srcSet={`${prefix}/images/avatars/image-${user}.webp`} />
        <img src={`${prefix}/images/avatars/image-${user}.png`} alt={user} />
      </picture>
      <div className="card__para flex">
        <h2 className="card__user text-base font-medium px-2 text-clr-neutral-500 self-center md:px-4">
          {user}
        </h2>
        {currentUser === user && (
          <p className="px-1 rounded text-clr-neutral-100 font-bold self-center bg-clr-pri-100 md:px-2">
            you
          </p>
        )}
        <p className="card__duration px-2">{duration}</p>
      </div>
    </div>
  );
};

export default HeaderComment;
