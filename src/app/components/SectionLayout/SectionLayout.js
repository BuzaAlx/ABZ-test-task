import Title from "../shared/Title";
import "./styles.sass";

const SectionLayout = ({ children, title }) => {
  return (
    <section className="section container">
      <Title>{title}</Title>
      {children}
    </section>
  );
};

export default SectionLayout;
