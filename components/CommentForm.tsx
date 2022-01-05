import React from "react";

interface Props {
  label: string;
  placeholder: string;
  content: string;
  user: string;
  handleSubmit: (t: string) => void;
  setIsAction: React.Dispatch<
    React.SetStateAction<{ type: string; payload: boolean }>
  >;
  setParentId: React.Dispatch<React.SetStateAction<number>>;
}

const CommentForm: React.FC<Props> = ({
  user,
  content = "",
  label,
  placeholder,
  handleSubmit,
  setParentId,
  setIsAction,
}) => {
  const [text, setText] = React.useState<string>(content);
  // disabled button if textarea is empty
  const isTextAreaDisabled = text.length === content.length;

  // Submit form to backend
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Remove the username from text
    const modifiedText = text.substring(content.length);

    handleSubmit(modifiedText);
    setParentId(0);
    setIsAction({ type: "edit", payload: false });
    setText("");
  };
  return (
    <div className=" grid mx-auto my-4 col-start-1 col-end-5 bg-clr-neutral-100 p-4 rounded-lg">
      <form
        onSubmit={onSubmit}
        className="relative grid grid-cols-3 w-full gap-2 md:grid-cols-card md:gap-4"
      >
        <textarea
          id="text-area"
          rows={5}
          cols={50}
          value={text}
          autoComplete="off"
          placeholder={placeholder}
          onChange={(e) => setText(e.target.value)}
          className="peer col-start-1 col-end-4 row-start-1 row-end-3 rounded-lg resize-none p-3 text-left text-clr-neutral-200 placeholder-transparent bg-transparent border  outline-none focus:ring-1 ring-clr-pri-100 md:cursor-pointer md:col-start-2 md:col-end-5 md:hover:border-clr-pri-300"
        />
        <label
          htmlFor="text-area"
          className="absolute cursor-text  -top-2 left-6 md:left-28 text-gray-400 text-sm bg-clr-neutral-100 italic first-letter:uppercase
          transition-all duration-200 ease-in
          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base
          peer-focus:-top-2
          peer-focus:text-sm
          peer-focus:text-bg-gray-400
          peer-focus:bg-clr-neutral-100
      
          
        "
        >
          {placeholder}
        </label>

        <picture className="block w-10 h-10 ">
          <source
            srcSet={` images/avatars/image-${user}.webp `}
            type="image/webp"
          />
          <img
            src={` images/avatars/image-${user}.png `}
            alt={user}
            className="block col-start-1 col-end-2 row-start-2 row-end-3 md:row-start-1"
          />
        </picture>
        <button
          disabled={isTextAreaDisabled}
          className="inline-block col-start-3 col-end-4 row-start-3 row-end-3 justify-self-end px-4 bg-clr-pri-100 rounded-lg text-clr-neutral-100 font-bold uppercase drop-shadow-md disabled:opacity-50 disabled:cursor-not-allowed 
          focus:outline-none
          focus:ring
          focus:ring-offset-2
          focus:ring-clr-pri-100
          focus:ring-opacity-75
          md:col-start-5 md:col-end-6 md:row-start-1 md:self-start md:py-3 md:hover:bg-clr-pri-300"
        >
          {label}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
