import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  InputGroup,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { search } from "stock-ticker-symbol";
import styles from "../styles/Home.module.css";

interface Res {
  meta: {
    name: string;
    symbol: string;
    region: string;
    timezone: string;
  };
  info: {
    ask: number;
    bid: number;
    close: number;
    high: number;
    low: number;
    open: number;
    price: number;
  };
}

const Home: NextPage = () => {
  const [stock, setStock] = useState("");
  const [data, setData] = useState<{ name: string; ticker: string }[]>([]);
  const [stonks, setStonks] = useState<Res[]>([]);

  const handleStockChange = async (stock: { name: string; ticker: string }) => {
    const r = await (await fetch(`/api/${stock.ticker}`)).json();
    console.log(r);
    setStonks([...stonks, r.data]);
    setStock("");
    setData([]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Stock info and finder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="lg"
              >
                <FormControl>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="search stock ticker"
                      variant="outline"
                      value={stock}
                      onChange={(e) => {
                        setStock(e.target.value);
                        const s = search(e.target.value);
                        setData(s);
                      }}
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
            </form>
            <Box>
              <Table variant="striped" width="100%">
                <Tbody>
                  {data.map((stock, idx) => (
                    <>
                      <Tr
                        key={idx}
                        border="1px"
                        m="0"
                        p="0"
                        borderColor="GrayText"
                        borderRadius="lg"
                      >
                        <Button
                          variant="unstyled"
                          onClick={() => {
                            handleStockChange(stock);
                          }}
                          _hover={{
                            backgroundColor: "green.300",
                          }}
                          width="100%"
                        >
                          {stock.name}/{stock.ticker}
                        </Button>
                      </Tr>
                      <Divider />
                    </>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
          {stonks.length !== 0 && (
            <Table>
              <Thead>
                <Th>Name/Symbol</Th>
                <Th>Price</Th>
                <Th>Close</Th>
                <Th>Ask</Th>
                <Th>Bid</Th>
                <Th>High</Th>
                <Th>Low</Th>
                <Th>Timezone</Th>
              </Thead>
              <Tbody>
                {stonks.map((stonk, idx) => (
                  <Tr key={idx}>
                    <Td>
                      {stonk.meta.name}/{stonk.meta.symbol}
                    </Td>
                    <Td>{stonk.info.price}</Td>
                    <Td>{stonk.info.close}</Td>
                    <Td>{stonk.info.ask}</Td>
                    <Td>{stonk.info.bid}</Td>
                    <Td>{stonk.info.high}</Td>
                    <Td>{stonk.info.low}</Td>
                    <Td>{stonk.meta.timezone}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Stack>
      </Flex>
    </div>
  );
};

export default Home;