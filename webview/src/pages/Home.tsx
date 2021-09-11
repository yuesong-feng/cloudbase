import React from "react";
import "./Home.less";
import Card from "../components/Card";
import Introduction from "../components/Introduction";
import MyPagination from "../components/Pagination";

interface HomeProps {
  history: any;
}
export default class Home extends React.Component<HomeProps> {
  render() {
    const articles = [
      {
        id: "1",
        title: "阿尔罕布拉宫的回忆",
        description: "阿尔罕布拉宫的回忆",
      },
      {
        id: "2",
        title: "阿尔罕布拉宫的回忆",
        description: "阿尔罕布拉宫的回忆",
      },
      {
        id: "3",
        title: "阿尔罕布拉宫的回忆",
        description: "阿尔罕布拉宫的回忆",
      },
      {
        id: "4",
        title: "阿尔罕布拉宫的回忆",
        description: "阿尔罕布拉宫的回忆",
      },
      {
        id: "5",
        title: "阿尔罕布拉宫的回忆",
        description: "阿尔罕布拉宫的回忆",
      },
    ];
    return (
      <div className="home">
        <Introduction>
          在所有独奏乐器中，古典吉他是最优秀的，它包含了所有的音乐经验，就像把世界上所有的音乐浓缩在这件精巧的乐器上
          ——安德烈斯·塞戈维亚
        </Introduction>
        {articles.map((each, index) => {
          return (
            <Card
              key={index}
              title={each.title}
              description={each.description}
              onClick={() => {
                this.props.history.push({
                  pathname: "/article",
                  search: `?id=${each.id}`,
                });
              }}
            />
          );
        })}
        <MyPagination />
      </div>
    );
  }
}
