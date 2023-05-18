import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Sports&CO</span>
      </div>
      <img
        className="headerImg"
        src="https://opiniao-publica.pt/wp-content/uploads/2020/10/desporto.png"
        alt=""
      />
    </div>
  );
}