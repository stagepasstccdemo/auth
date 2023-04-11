import { DefaultLayout, Flex, Pills } from "@stagepass/osiris-ui"
import { useEffect } from "react"

import TicketsImg from "../../../../assets/tickets_image.png"
import TicketBg from "../../../../assets/ticket_bg.png"

export const ShowHowFirst = ({page, setPage}) => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(page + 1);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [page, setPage])

  return (
    <DefaultLayout>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <div style={{
        position: "relative",
      }}>
        <h1>Welcome to stagePass</h1>
        <p>Get tickets for everything you'll ever need</p>
        <img src={TicketsImg}></img>
        <img src={TicketBg} style={{position: "absolute"}}/>
      </div>
      <Flex gap={20}>
        <Pills selected/>
        <Pills/>
        <Pills/>
      </Flex>
      </Flex>
    </DefaultLayout>
  )
}