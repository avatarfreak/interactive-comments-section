import React from "react";

interface Props {
  score: number;
  commentId: number;
  updateComment: (commentId: number, votes: number) => void;
}

const Votes: React.FC<Props> = ({ score, commentId, updateComment }) => {
  const [counts, setCounts] = React.useState<number>(score);
  const [flag, setFlag] = React.useState<boolean>(false);
  const incrementCount = () => {
    if (flag) return;
    setCounts(() => counts + 1);
    updateComment(commentId, counts + 1);

    // Allowed to votes only once
    setFlag(true);
  };

  const decrementCount = () => {
    if (flag) return;
    if (counts === 0) return;
    setCounts(() => counts - 1);
    updateComment(commentId, counts - 1);

    // Allowed to votes only once
    setFlag(true);
  };
  return (
    <>
      <div className="drop-shadow-sm flex items-center rounded-lg bg-clr-neutral-300 md:col-start-1 md:col-end-2 md:flex-col">
        <button
          aria-label="vote up"
          className={`group p-3 font-bold ${!flag ? "cursor-pointer" : "cursor-not-allowed"}`}
          onClick={incrementCount}
          disabled={flag}
        >
          <svg aria-hidden="true" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              className="md:group-hover:fill-clr-pri-100 group-focus:fill-clr-pri-100"
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
        </button>
        <p className="font-medium">{counts}</p>
        <button
          aria-label="vote down"
          className={`group p-3 font-bold flex items-center ${
            !flag ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={decrementCount}
          disabled={flag}
        >
          <svg aria-hidden="true" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path
              className="md:group-hover:fill-clr-pri-100 group-focus:fill-clr-pri-100"
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Votes;
