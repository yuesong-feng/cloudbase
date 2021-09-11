import React from "react";
import "./Article.less";
import defaultImg from "../images/defaultImg.jpeg";
import E from 'wangeditor'
let editor: any = null

interface ArticleProps {
  history: any;
}
export default class Article extends React.Component<ArticleProps> {
  constructor(props: ArticleProps | Readonly<ArticleProps>) {
    super(props);
  }
  componentDidMount(){
    editor = new E('#toolbar-container', '#text-container')
    editor.create()
    editor.txt.html(`<h1 id="t2l9d"><font color="#c24f4a">123</font></h1><p><font color="#c24f4a"><b>243</b><br/></font></p><p><font color="#c24f4a"><font face="黑体">1分钱微风</font><b><br/></b></font></p><p><font color="#c24f4a"></font><span style="font-size: 14px;">😛</span><font face="黑体"><br/></font></p><table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><th></th><th></th><th></th><th></th><th></th></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td>阿俄法</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h1 id="t2l9d"><font color="#c24f4a">123</font></h1><p><font color="#c24f4a"><b>243</b><br/></font></p><p><font color="#c24f4a"><font face="黑体">1分钱微风</font><b><br/></b></font></p><p><font color="#c24f4a"></font><span style="font-size: 14px;">😛</span><font face="黑体"><br/></font></p><table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><th></th><th></th><th></th><th></th><th></th></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td>阿俄法</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h1 id="t2l9d"><font color="#c24f4a">123</font></h1><p><font color="#c24f4a"><b>243</b><br/></font></p><p><font color="#c24f4a"><font face="黑体">1分钱微风</font><b><br/></b></font></p><p><font color="#c24f4a"></font><span style="font-size: 14px;">😛</span><font face="黑体"><br/></font></p><table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><th></th><th></th><th></th><th></th><th></th></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td>阿俄法</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>`)
    editor.disable()
  }
  componentWillUnmount(){
    editor.destroy()
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
          <button
            onClick={() => {
              this.props.history.goBack();
            }}
          >back</button>
        </div>

        <div className="articleCard">
          <img src={defaultImg} className="articleImg" />
          <div id="toolbar-container"></div>
          <div id="text-container"></div>
        </div>

      </div>
    );
  }
}
