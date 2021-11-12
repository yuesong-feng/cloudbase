import React from "react";
import "./EditArticle.less";
import defaultImg from "../images/defaultImg.jpeg";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditArticleProps {
  history?: any;
}
export default class Article extends React.Component<EditArticleProps> {
  constructor(props: EditArticleProps | Readonly<EditArticleProps>) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="articlePage">
        <div className="articleTopBar"></div>

        <div className="articleCard">
          <img src={defaultImg} className="articleImg" />
          <ReactQuill className="editor" />
        </div>
      </div>
    );
  }
}
