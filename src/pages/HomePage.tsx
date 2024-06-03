import {ReactNode} from "react";
import flag from "/images/egypt_115x110.png";

type HomePageProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

const HomePage = ({ title = "Title", subtitle = "Subtitle", children }: HomePageProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{children}</p>
      <img src={flag} alt="Egyptian Flag" />
    </div>
  );
};

export default HomePage;
