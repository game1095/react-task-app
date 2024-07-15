import "./Header.css"
export default function Header() {
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span>โหมดกลางวัน</span>
        <span className="icon">สลับ</span>
      </div>
    </header>
  );
}
