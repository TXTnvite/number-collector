import { useEffect } from "react";
import PageContent from "./PageContent";

import { Outlet } from "react-router-dom";

function Page({ currentPage }) {
  return (
    <section>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}
export default Page;
