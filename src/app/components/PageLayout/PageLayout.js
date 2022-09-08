import Header from "../Header/Header";
import { nav } from "../../../consts/list";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header navigation={nav} />
      {children}
    </>
  );
};

export default PageLayout;
