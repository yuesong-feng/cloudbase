import React from "react";
import "./Card.less";
import defaultImg from "../images/defaultImg.jpeg";

interface CardProps {
  img?: string;
  title?: string;
  description?: string;
  onClick?: any;
}
export default class Card extends React.Component<CardProps> {
  static defaultProps = {
    img: defaultImg,
  };
  constructor(props: CardProps | Readonly<CardProps>) {
    super(props);
  }
  render() {
    return (
      <div className="card" onClick={this.props.onClick}>
        <img src={this.props.img} alt="" className="cardImg" />
        <div className="cardTitle">{this.props.title}</div>
        <div className="cardDescription">{this.props.description}</div>
      </div>
    );
  }
}
