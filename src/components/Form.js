import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box
} from "@chakra-ui/react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Form() {
  return (
    <Box bgColor="white" p={3} w="100%" boxShadow="lg" borderRadius="lg">
      <Tabs align="center" colorScheme="red">
        <TabList mt="2" borderBottomColor="transparent">
          <Tab _focus={{ boxShadow: "none" }}>登录</Tab>
          <Tab _focus={{ boxShadow: "none" }}>注册</Tab>
        </TabList>
        <TabPanels mt="7">
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
