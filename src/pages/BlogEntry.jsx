import React, { useState } from "react";
import BlogsPostDetails from "../components/Blog/BlogPostDetails";
import BlogImage from "../assets/blogs_Imge1.png";
import AuthorPhoto from "../assets/blog_author.jpg";
import BlogPic from "../assets/blogs_Image2.png";
import BlogPostCard from "../components/Blog/BlogPostCard";
import Footer from "../components/Footer";
import { FiThumbsUp } from "react-icons/fi";
import { BiComment, BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const BlogsPost = () => {
  const posts = [
    {
      id: "1",
      src: BlogPic,
      alt: "blogpic",
      postDate: "25 Nov 2020",
      read: "5",
      title:
        "The blog title will come here in multiple lines as you can see here in this",
      authorSrc: AuthorPhoto,
      authorAlt: "authorpic",
      authorName: "Preetham Nayak"
    },
    {
      id: "2",

      src: BlogPic,
      alt: "blogpic",
      postDate: "25 Nov 2020",
      read: "5",
      title:
        "The blog title will come here in multiple lines as you can see here in this",
      authorSrc: AuthorPhoto,
      authorAlt: "authorpic",
      authorName: "Preetham Nayak"
    }
  ];
  return (
    <div className="">
      <BlogsPostDetails
        category="category"
        title="The blog title will come here in multiple lines as you can see"
        src={BlogImage}
        alt="Blog Pic"
        description={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br /> <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum." <br /> <br />
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. <br /> <br />
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. <br /> <br />
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?" <br /> <br />
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
            <br /> <br />
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? <br /> <br />
            But who has any right to find fault with a man who chooses to enjoy
            a pleasure that has no annoying consequences, or one who avoids a
            pain that produces no resultant pleasure?
          </p>
        }
        // authorSrc={AuthorPhoto}
        // authorAlt="author Pic"
        // authorName="Preetham Nayak"
        postDate="20 Nov 2020"
        read="5"
      />

      <Comments />
      <hr className="mx-20 text-light-slate mt-10 lg:mt-0 " />
      <div className="py-10">
        <h1 className="text-violet text-xl lg:text-4xl font-bold px-8 lg:px-28">
          Related blogs <span className="text-slate"> for you to read </span>
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-20   lg:px-20 mb-20   ">
        {posts.map((item) => (
          <BlogPostCard
            id={item.id}
            src={item.src}
            alt={item.alt}
            postDate={item.postDate}
            read={item.read}
            title={item.title}
            authorSrc={item.authorSrc}
            authorAlt={item.authorAlt}
            authorName={item.authorName}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPost;

export const Comments = () => {
  const [commentValue, setCommentValue] = useState("");
  const [like, setLike] = useState("Upvote");
  const [isDelete, setIsDelete] = useState(false);
  const [comment, setComment] = useState(false);
  console.log(like !== "Upvote");
  return (
    <>
      <div className="bg-white border rounded-2xl border-[#CBCBCB]  p-4 w-max lg:w-8/12  m-auto lg:p-10 my-14 lg:my-32">
        <div className="flex items-center space-x-5  ">
          <img
            src={AuthorPhoto}
            alt=""
            className="w-10 h-10 lg:w-14 lg:h-14 rounded-full"
          />
          <div className="border-2 border-[#A4A4A4] lg:w-full rounded-lg">
            <input
              type="text"
              className="w-full focus:outline-none text-sm lg:text-lg py-1 lg:py-2 px-5"
              placeholder="Write your comment here"
              onChange={(e) => {
                setCommentValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-end mr-5 py-2">
          <button className="bg-[#F2F2F2] p-2 lg:p-3 rounded-lg text-sm lg:text-lg  ">
            Post a comment
          </button>
        </div>

        <div className="lg:w-full flex ">
          <div className="flex lg:w-full  space-x-5 mb-10 lg:mb-0 relative  ">
            <img
              src={AuthorPhoto}
              alt=""
              className="w-10 h-10 lg:w-14 lg:h-14 rounded-full "
            />
            <div className="flex flex-col ">
              <div className="flex space-x-5">
                <p className="text-sm lg:text-lg">Preetham Nayak</p>
                <p className="text-xs lg:text-base">6min ago</p>
              </div>
              {/* <p className="lg:text-lg font-medium">{commentValue}</p> */}
              <p className="text-sm lg:text-xl font-medium">Very Good BLog </p>

              <div className="absolute lg:relative left-0 top-10 lg:top-0 flex  space-x-5 lg:space-x-14  mt-5 cursor-pointer">
                <div className={`  flex items-center space-x-2 lg:text-lg `}>
                  <FiThumbsUp
                    className={`${
                      like !== "Upvote" ? "text-violet" : "text-[#989898]"
                    } `}
                  />
                  <p
                    className={`${
                      like !== "Upvote" ? "text-violet" : "text-[#AAAAAA]"
                    }  text-sm lg:text-lg`}
                    onClick={() => {
                      setLike(1);
                    }}
                  >
                    {like}
                  </p>
                </div>
                <div className="flex  items-center space-x-2">
                  <BiComment
                    className="text-[#989898]"
                    onClick={() => {
                      setComment(!comment);
                    }}
                  />
                  {comment && (
                    <div className="w-full">
                      <div className="border border-[#A4A4A4] py-1 px-3 rounded-lg w-full">
                        <input
                          type="text"
                          className="w-full focus:outline-none"
                          placeholder="Reply here"
                        />
                      </div>
                    </div>
                  )}
                  <p
                    className={`text-[#AAAAAA] text-sm lg:text-lg ${
                      comment ? "hidden" : ""
                    }`}
                    onClick={() => {
                      setComment(!comment);
                    }}
                  >
                    Comment
                  </p>
                </div>
                <div
                  className={` ${
                    comment ? "hidden" : ""
                  } flex items-center space-x-2`}
                >
                  <AiOutlineEye className="text-[#989898] text-lg" />
                  <p className="text-[#AAAAAA] text-sm lg:text-lg w-max">
                    View Replies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {isDelete && (
            <div className="lg:float-left  absolute lg:relative right-0 lg:mt-2">
              <div
                className="bg-white px-5 py-5 rounded-xl cursor-pointer "
                style={{ boxShadow: "0px 6px 23px rgba(125, 35, 224, 0.12)" }}
              >
                <div
                  className="flex items-center space-x-2 py-3 "
                  onClick={() => {
                    setIsDelete(!isDelete);
                  }}
                >
                  <AiOutlineEdit />
                  <button className="">Edit</button>
                </div>
                <div
                  className="flex items-center space-x-2"
                  onClick={() => {
                    setIsDelete(!isDelete);
                  }}
                >
                  <AiOutlineDelete />
                  <button className="">Delete</button>
                </div>
              </div>
            </div>
          )}
          <BiDotsVerticalRounded
            className="flex justify-end ml-auto "
            onClick={() => {
              setIsDelete(!isDelete);
            }}
          />
        </div>
      </div>
    </>
  );
};
