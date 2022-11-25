import { useState, useRef } from "react";
import TipTap from "../TipTap";
import classes from "./AddPost.module.css";
import parser from "html-react-parser";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function saveBlogData(blogTitle, blogData, imageUrl) {
  const response = await fetch("/api/posts/AddPost", {
    method: "POST",
    body: JSON.stringify({ blogTitle, blogData, imageUrl }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something Went Wrong");
  }

  return data;
}
function AddPost() {
  const [blogData, setBlogData] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const titleRef = useRef();
  const ImageRef = useRef();
  const router = useRouter();
  function blogDataHandler(data) {
    // console.log(data);
    setBlogData(data);
  }
  const notify = () => {
    toast.success("🦄 Successfully posted");
  };

  async function submitHandler(event) {
    event.preventDefault();
    const blogTitle = titleRef.current.value;
    console.log(blogTitle);

    const ImageData = ImageRef.current.files[0];

    const formData = new FormData();
    formData.append("file", ImageData);

    formData.append("upload_preset", "blogImage");

    setIsPublishing(true);
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dydejb036/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const res = await data.json();

    const imageUrl = res.secure_url;
    if (imageUrl) {
      try {
        const result = await saveBlogData(blogTitle, blogData, imageUrl);

        setIsPublishing(false);
        notify()

        router.reload();

        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form onSubmit={submitHandler}>
          <div className={classes.postTitle}>
            <label htmlFor="blogTitle">Blog Title</label>
            <input id="blogTitle" ref={titleRef} />
          </div>
          <div className={classes.EditorField}>
            <TipTap onSaveBlog={blogDataHandler} />
          </div>
          <div className={classes.Image}>
            <label htmlFor="image" className={classes.dropContainer}>
              <span className={classes.dropTitle}>Drop Image here</span>
              or
              <input
                type="file"
                id="image"
                accept="image/*"
                required
                ref={ImageRef}
              />
            </label>
          </div>

          <div className={classes.buttonField}>
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
      <div>
        <button onClick={notify}>notify</button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
export default AddPost;
