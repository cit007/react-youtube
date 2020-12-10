import React from "react";
import Layout from "../components/Layout/Layout";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import VideoSideList from "../components/VideoSideList/VideoSideList";
const Detail = () => {
  return (
    <Layout>
      <VideoDetail />
      <VideoSideList />
    </Layout>
  );
};

export default Detail;
