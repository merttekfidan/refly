import HeaderMenu from "./HeaderMenu";
import HeaderTopbar from "./HeaderTopbar";
function HeaderMain() {
  return (
    <>
      <header className="header-area">
        <HeaderTopbar />
        <HeaderMenu />
      </header>
    </>
  );
}

export default HeaderMain;
