import React, { useState } from "react";
import NavHeader from "../components/NavHeader";
import BackgroundGradient from "../assets/background/landing_gradient.png";
import PostImage from "../assets/blog_author.jpg";
import BlogPhoto from "../assets/blogPhoto.png";
import BlogPost from "../components/Blog/BlogPost";
import BlogsCategory from "../components/Blog/BlogsCategory";
import BackgroundVector from "../assets/background/background_box.png";

import Footer from "../components/Footer";

const Blogs = () => {
  const [viewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const [showMark, setShowMark] = useState(false);
  const [email, setEmail] = useState("second");
  return (
    <>
      <div
        className="font-dm-sans w-screen min-h-screen"
        style={
          viewPort.width > 768
            ? {
                backgroundImage: `url(${BackgroundGradient})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vw 120vh",
                backgroundPosition: "50% 0%"
              }
            : {}
        }
      >
        <NavHeader />
        <main>
          <BlogPost
            category="Latest"
            title="The blog title will come here in multiple lines as you can see"
            src={BlogPhoto}
            alt="blogPost img"
            authorSrc={PostImage}
            authorAlt="post photo"
            authorName="Preetham Nayak"
            postDate="25 Nov 2002"
            read="5"
          />
          <BlogsCategory
            Category1="Category"
            Category2="Category"
            Category3="Category"
            Category4="Category"
            Category5="Category"
          />

          <section className="mb-60 ">
            <div
              className="font-dm-sans w-full   "
              style={{
                backgroundImage: `url(${BackgroundVector})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "70vw 50vh",
                backgroundPosition: "40% 0%"
              }}
            >
              <div
                className="  flex  flex-wrap  py-12 w-full xl:w-3/5   m-auto lg:rounded-3xl shadow-xl r relative md:top-20 bg-white "
                style={{ boxShadow: "10px 10px 40px rgba(113, 42, 191, 0.15)" }}
              >
                <div className="flex flex-col  space-y-2 px-20  text-center m-auto lg:m-0 ">
                  <h3 className="text-xl lg:text-4xl text-slate font-semibold">
                    Stay upto date.
                  </h3>
                  <p className="text-violet text-center  space-y-4  text-xl">
                    Don’t miss out future blogs.
                  </p>
                </div>
                <div className="flex flex-col m-auto lg:m-0  ">
                  <input
                    type="email"
                    className="h-12  mt-2 p-4  border-2 border-violet rounded-lg md:w-72 xl:w-96"
                    placeholder="type your email here"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <button
                    onFocus={() => {
                      email.length > 1 && email.includes("@")
                        ? setShowMark(true)
                        : setShowMark(false);
                    }}
                    className={
                      (showMark && email.length > 1 && email.includes("@")
                        ? "bg-green "
                        : "bg-violet  ") +
                      " text-white lg:absolute lg:ml-48 xl:ml-80 w-36 h-12 m-auto rounded-md mt-2 p-1   "
                    }
                  >
                    {showMark && email.length > 1 && email.includes("@")
                      ? "✔"
                      : "Register"}
                  </button>
                  {showMark && email.length > 1 && email.includes("@") ? (
                    <p className="text-white">
                      Thanks For Subscribing Newsletter
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Main Footer */}
          <Footer />
          {/* <BlogAuthor
            src={PostImage}
            alt="post photo"
            authorName="Preetham Nayak"
            postDate="25-02-2002"
            read="4"
          /> */}
          {/* <section
            className="px-8 lg:px-28   flex flex-col-reverse lg:flex-row items-center justify-center lg:py-20"
            // style={{ height: `calc(100vh - 120px)` }}
          >
            <div className="flex flex-col items-start space-y-3 lg:space-y-6 relative left-0 ">
              <p className="">Category</p>
              <h1 className="text-slate font-bold text-3xl xl:text-6xl">
                The blog title will come here in multiple lines as you can see
              </h1>
              <img src={PostImage} alt="" />
            </div>
          </section> */}
        </main>
      </div>
    </>
  );
};

export default Blogs;
