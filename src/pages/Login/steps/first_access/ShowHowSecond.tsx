import { DefaultLayout, Flex, Pills } from "@stagepass/osiris-ui";
import { useEffect } from "react";

export const ShowHowSecond = ({setPage, page}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(page + 1);
    }, 40000);

    return () => clearTimeout(timeoutId);
  }, [page, setPage])

  return (
    <DefaultLayout>
      <Flex flexDirection="column" alignItems="center" justifyContent="space-between">
      <div style={{
        position: "relative",
      }}>
        <h1>Have Fun In every way possible</h1>
        <Flex flexDirection="column">
          <button>Concerts</button>
          <button>Festivals</button>
          <button>Sports</button>
          <button>Talks</button>  
        </Flex>
        <h1>And a whole lot more...</h1>
      </div>
      <Flex gap={20}>
        <Pills/>
        <Pills selected/>
        <Pills/>
      </Flex>
      </Flex>
    </DefaultLayout>
  )
}