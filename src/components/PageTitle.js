import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>뭐하셈?적으셈! | {title}</title>
    </Helmet>
  );
};
