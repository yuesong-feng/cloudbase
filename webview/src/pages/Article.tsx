import React from "react";
import "./Article.less";
import defaultImg from "../images/defaultImg.jpeg";
interface ArticleProps {
  history: any;
}
export default class Article extends React.Component<ArticleProps> {
  constructor(props: ArticleProps | Readonly<ArticleProps>) {
    super(props);

  }
  componentDidMount(){
  }
  componentWillUnmount(){
  }

  // getParam(key: string) {
  //   let query = this.props.history.location.search.substring(1);
  //   let paramList = query.split("&");
  //   for (let i = 0; i < paramList.length; i++) {
  //     let key_value = paramList[i].split("=");
  //     if (key_value[0] === key) {
  //       return decodeURIComponent(key_value[1]);
  //     }
  //   }
  //   return "";
  // }
  render() {
    return (
      
      <div className="articlePage">
        <div className="articleTopBar">
          <button
            onClick={() => {
              this.props.history.goBack();
            }}
          >back</button>
        </div>

        <div className="articleCard">
          <img src={defaultImg} className="articleImg" />
        </div>
        
      </div>
    );
  }
}
