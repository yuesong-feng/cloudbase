import React from "react";
import './Pagination.less'
import { Pagination } from "antd";

export default class MyPagination extends React.Component {
  render() {
    return <Pagination className="homePagination" total={50} />;
  }
}
