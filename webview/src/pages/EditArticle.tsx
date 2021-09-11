import React from "react";
import "./EditArticle.less";
import defaultImg from "../images/defaultImg.jpeg";
import E from "wangeditor";
let editor1: any = null;
let editor2: any = null;

interface EditArticleProps {
  history?: any;
}
export default class Article extends React.Component<EditArticleProps> {
  constructor(props: EditArticleProps | Readonly<EditArticleProps>) {
    super(props);
  }
  componentDidMount() {
    editor2 = new E("#text-display");
    editor2.create();
    editor2.disable();

    editor1 = new E("#toolbar-container", "#text-container");
    editor1.config.onchange = (newHtml: any) => {
      editor2.txt.html(newHtml)
    };
    editor1.create();
  }
  componentWillUnmount() {
    editor1.destroy();
    editor2.destroy();
  }

  getParam(key: string) {
    let query = this.props.history.location.search.substring(1);
    let paramList = query.split("&");
    for (let i = 0; i < paramList.length; i++) {
      let key_value = paramList[i].split("=");
      if (key_value[0] === key) {
        return decodeURIComponent(key_value[1]);
      }
    }
    return "";
  }
  render() {
    return (
      <div className="articlePage">
        <div className="articleTopBar">
          {/* <button
            onClick={() => {
              this.props.history.goBack();
            }}
          >back</button> */}
        </div>

        <div className="articleCard">
          <img src={defaultImg} className="articleImg" />
          <div className="editLeft">
            <div id="toolbar-container"></div>
            <div id="text-container"></div>
          </div>
          <div className="editRight">
            <div id="text-display"></div>
          </div>
        </div>
      </div>
    );
  }
}
