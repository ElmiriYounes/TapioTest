import axios, { AxiosResponse } from "axios";
import React, { FC, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Posts from "./components/posts/Posts";
import { GlobalStyle } from "./globalStyle";
import { lightTheme } from "./themes/lightTheme";
import { IData } from "./interfaces/TablePosts.interfaces";
import { darkTheme } from "./themes/darkTheme";
import Mode from "./components/mode/Mode";
import Error404 from "./components/errors/Error404";
import Loading from "./components/loading/Loading";

const App: FC = () => {
  const [posts, setPosts] = useState<IData[]>([]);

  const [fetching, setFetching] = useState<boolean>(true);

  const [error, setError] = useState<boolean>(false);

  const [mode, setMode] = useState<string>("light");

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
      }, 3000);
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
      }, 3000);

      setPosts(JSON.parse(localStorage.getItem("posts")!));
    }

    localStorage.getItem("mode") !== null &&
      setMode(localStorage.getItem("mode")!);

    // to avoid warning "react hook useeffect has a missing dependency"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      {GlobalStyle}

      {error && <Error404 />}

      {!error && fetching && <Loading />}

      <Mode mode={mode} setMode={setMode} />

      {!fetching && <Posts posts={posts} setPosts={setPosts} />}
    </ThemeProvider>
  );
};

export default App;
