import React, { useState } from "react";
import EventCard from "../UI/EventCard";
import EventPost from "../Api/EventPost";
const UpcomingEvent = () => {
  const [events] = useState(EventPost);
  const [data, setData] = useState(EventPost);
  const [category1, setCategory1] = useState(true);
  const [category2, setCategory2] = useState(false);
  const [category3, setCategory3] = useState(false);
  const [category4, setCategory4] = useState(false);
  const [category5, setCategory5] = useState(false);
  const filterResult = (catItem) => {
    const result = EventPost.filter((cur) => {
      return cur.category === catItem;
    });
    setData(result);
  };

  return (
    <div>
      {/* section-1  */}

      <section className="px-10 lg:px-32 lg:py-10 md:flex">
        <h1 className="text-2xl lg:text-6xl font-bold">
          Upcoming <span className="text-violet">Events </span>{" "}
        </h1>
        <button className=" w-32 lg:w-48 lg:h-14  mt-4 sm:mt-0 text-center  bg-violet ml-auto rounded-lg text-lg lg:text-2xl text-white font-medium">
          Get Notified
        </button>
      </section>

      {/* section-2  */}
      <section className="px-8 md:px-10 lg:px-24">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-20   mb-10 py-10   ">
          {events.map((item) => {
            const {
              id,
              src,
              alt,
              postDate,
              read,
              title,
              authorSrc,
              authorAlt,
              authorName,
            } = item;
            return (
              <EventCard
                id={id}
                src={src}
                alt={alt}
                postDate={postDate}
                read={read}
                title={title}
                authorSrc={authorSrc}
                authorAlt={authorAlt}
                authorName={authorName}
              />
            );
          })}
        </div>
      </section>

      {/* section-3  */}

      <section className="px-8 lg:px-32 ">
        <div className=" md:flex">
          <h1 className="text-2xl lg:text-6xl font-bold">
            Event <span className="text-violet">Library </span>{" "}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row text-xl gap-4   mt-10 mb-10 ">
          <button
            className={
              (category1
                ? "text-violet  font-semibold"
                : "text-light-slate  font-semibold") +
              " border-2 p-1  lg:pr-10 rounded-lg px-3"
            }
            onClick={() => {
              setCategory1(true);
              setCategory2(false);
              setCategory3(false);
              setCategory4(false);
              setCategory5(false);
              filterResult("Category1");
            }}
          >
            Finance
          </button>
          <button
            className={
              (category2
                ? "text-violet font-semibold"
                : " text-light-slate   font-semibold") +
              " border-2 p-1 lg:pr-10 rounded-lg px-3"
            }
            onClick={() => {
              setCategory1(false);
              setCategory2(true);
              setCategory3(false);
              setCategory4(false);
              setCategory5(false);
              filterResult("Category2");
            }}
          >
            Technology
          </button>
          <button
            className={
              (category3
                ? "text-violet  font-semibold"
                : "text-light-slate   font-semibold") +
              " border-2 p-1 lg:pr-10 rounded-lg px-3"
            }
            onClick={() => {
              setCategory1(false);
              setCategory3(true);
              setCategory5(false);

              setCategory2(false);
              setCategory4(false);
              filterResult("Category3");
            }}
          >
            Economics
          </button>
          <button
            className={
              (category4
                ? "text-violet  font-semibold"
                : "text-light-slate   font-semibold") +
              " border-2 p-1 lg:pr-10 rounded-lg px-3"
            }
            onClick={() => {
              setCategory2(false);
              setCategory4(true);
              setCategory5(false);

              setCategory3(false);
              setCategory1(false);
              filterResult("Category4");
            }}
          >
            Freelancing
          </button>
          <button
            className={
              (category5
                ? "text-violet  font-semibold"
                : " text-light-slate  font-semibold") +
              " border-2 p-1 lg:pr-10 rounded-lg px-3"
            }
            onClick={() => {
              setCategory2(false);
              setCategory4(false);
              setCategory5(true);
              setCategory3(false);
              setCategory1(false);
              filterResult("Category5");
            }}
          >
            Entreprenership
          </button>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-20   mb-32 py-10   ">
          {data.map((item) => {
            const {
              id,
              src,
              alt,
              postDate,
              read,
              title,
              authorSrc,
              authorAlt,
              authorName,
            } = item;
            return (
              <EventCard
                id={id}
                src={src}
                alt={alt}
                postDate={postDate}
                read={read}
                title={title}
                authorSrc={authorSrc}
                authorAlt={authorAlt}
                authorName={authorName}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvent;
