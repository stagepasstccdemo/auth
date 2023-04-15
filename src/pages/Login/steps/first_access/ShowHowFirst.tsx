// @ts-ignore
import { DefaultLayout, Flex, Pills, Heading } from "@stagepass/osiris-ui";
import { useEffect } from "react";

import TicketsImg from "../../../../assets/tickets_image.png";
import TicketBg from "../../../../assets/ticket_bg.png";

export function ShowHowFirst({ page, setPage }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(page + 1);
    }, 200000000);

    return () => clearTimeout(timeoutId);
  }, [page, setPage]);

  return (
    <DefaultLayout>
      <Heading as="h1">Welcome to stagePass</Heading>
      <p>Get tickets for everything you ll ever need</p>
      <img src={TicketsImg} alt="a" />

      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Flex gap={20}>
          <Pills selected />
          <Pills />
          <Pills />
        </Flex>
      </Flex>

      <img src={TicketBg} style={{ position: "absolute" }} alt="a" />
    </DefaultLayout>
  );
}
