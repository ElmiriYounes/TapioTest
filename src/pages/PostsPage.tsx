import axios, { AxiosResponse } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import Error404 from "src/components/errors/Error404";
import Loading from "src/components/loading/Loading";
import Mode from "src/components/mode/Mode";
import Posts from "src/components/posts/Posts";
import { IPostsPage } from "src/interfaces/posts.interfaces";
import { IData } from "src/interfaces/TablePosts.interfaces";
import { PostsPageContainer } from "./PostsPage.style";

const PostsPage: FC<IPostsPage> = ({ mode, setMode }) => {
  const [posts, setPosts] = useState<IData[]>([]);

  const [fetching, setFetching] = useState<boolean>(true);

  const [error, setError] = useState<boolean>(false);

  /**
   * Get all users
   */
  const getUsers = async (postsFetched: any): Promise<void> => {
    try {
      const response: AxiosResponse<any, any> = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      let posts: IData[] = [];

      postsFetched.map((postFetched: any) => {
        return posts.push({
          user: response.data.filter(
            (userData: any) => userData.id === postFetched.userId
          )[0].name,
          title: postFetched.title,
          body: postFetched.body,
        });
      });

      setPosts([...posts]);

      localStorage.setItem("posts", JSON.stringify([...posts]));

      setTimeout(() => {
        setFetching(false);
      }, 1500);
    } catch (err: unknown) {
      setError(true);
    }
  };

  /**
   * Get all posts
   */
  const getPosts = async (): Promise<void> => {
    try {
      const response: AxiosResponse<any, any> = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      getUsers(response.data);
    } catch (err: unknown) {
      setError(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("posts") === null) {
      getPosts();
    } else {
      setTimeout(() => {
        setFetching(false);
      }, 1500);
      setPosts(JSON.parse(localStorage.getItem("posts")!));
    }

    // to avoid warning "react hook useeffect has a missing dependency"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostsPageContainer>
      {error && <Error404 />}

      {!error && fetching && <Loading />}

      <Mode mode={mode} setMode={setMode} />

      {!fetching && <Posts posts={posts} setPosts={setPosts} />}
    </PostsPageContainer>
  );
};

export default PostsPage;
