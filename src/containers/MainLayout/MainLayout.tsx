import { ElementType, FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const MainLayout: FC<Props> = ({ children }) => {
  return <div className="p-5">{children}</div>;
};

export default MainLayout;
