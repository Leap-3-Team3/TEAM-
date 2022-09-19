import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sendRequest } from "../api/api";
import { CustomAvatar } from "../components/CustomAvatar";
import { UserFooter } from "../components/UserAndDate";

const BlogDetail = () => {
  let { id } = useParams();
  let [data,setData] =useState([])
  const getData = async () => {
    let data = await sendRequest({url:`post/${id}`, method: 'GET'})
    // setData(data)
  }
  // console.log(data)
  useEffect(()=>{
    getData()
  })
  return (
    <div className="w-screen flex justify-center">
      <div className="w-3/5 my-40 flex flex-col items-center">
        <div className="flex flex-col items-start mx-9 ">
          <h1 className="text-4xl text-start">
            10 Secrets for managing a remote team{" "}
          </h1>
          <UserFooter userName="Enkhjin" date="2nd January, 2022" />
        </div>
        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
        <div className="flex flex-col items-center my-10">
          <p className="text-start w-3/5">
            If you’re thinking of starting a blog of your own, but just don’t
            have a clue on what to blog about, then fear not! In this article, I
            have included a whole load of blog examples from a wide variety of
            different niches, all run on different blogging platforms like
            WordPress, Joomla! and Drupal. Since the beginning of the internet,
            millions and millions and millions of blogs have been created. Many
            have died due to lost interest or their owners giving up on the
            idea, while others have thrived and continue to grow, making money
            and earning their owners a steady income. It’s a constant evolution
            of content that keeps people coming back for more, especially if
            these blogs contact highly resourceful material that people find
            useful and interesting. Each example listed in this blog post are
            all different in some way and all bring something unique to their
            readers & subscribers. I want to show you what is possible and how
            you can take inspiration from them and create an awesome blog of
            your own. Some of these blogs make over $100k a month, others are
            just a hobby for their owners, but all have the same purpose at
            their core… the love of writing and sharing information. Some of
            these blogs make over $100k a month, others are just a hobby for
            their owners, but all have the same purpose at their core… the love
            of writing and Some of these blogs make over $100k a month, others
            are just a hobby for their owners, but all have the same purpose at
            their core… the love of writing and sharing information. Some of
            these blogs make over $100k a month, others are just a hobby for
            their owners, but all have the same purpose at their core… the love
            of writing and sharing information.
          </p>
        </div>
        <div className="h-20 flex my-10 justify-start">
          <CustomAvatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          <div className="ml-5 flex flex-col items-start">
            <p className="text-sm">Written by</p>
            <p className="text-2xl">Shedrack Eze</p>
            <p className="text-sm text-gray-400">CEO Team App</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetail;
