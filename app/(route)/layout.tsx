import { PropsWithChildren } from "react";
import Header from "@/components/header";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
