import React from "react"
import {
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  Text,
  Flex,
  Link,
  useToast
} from "@chakra-ui/react"
import { FaUserAlt, FaLock, FaMobileAlt, FaQq, FaWeixin } from "react-icons/fa"
import useUpdateInput from "./useUpdateInput"
import axios from 'axios'

export default function SignUp() {
  const usernameInput = useUpdateInput('')
  const emailInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')
  const toast = useToast()
  const handleSubmit = async () => {
    if (!usernameInput.value ||
      !emailInput.value ||
      !passwordInput.value
    ) {
      toast({
        title: "输入内容不能为空",
        status: "error",
        isClosable: true,
        position: "top",
        duration: "2000"
      })
      return
    }
    const user = {
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    }
    try {
      await axios.post("https://conduit.productionready.io/api/users", {user})
      return toast({
        title: "注册成功",
        status: "success",
        isClosable: true,
        position: "top",
        duration: "2000"
      })
    }catch (err) {
      return toast({
        title: err.message,
        status: "error",
        isClosable: true,
        position: "top",
        duration: "2000"
      })
    }
  }
  return (
    <form>
      <InputGroup bgColor="gray.100" borderColor="gray">
        <InputLeftElement children={<FaUserAlt />} color="gray.500"/>
        <Input placeholder="你的昵称" {...usernameInput}/>
      </InputGroup>
      <InputGroup bgColor="gray.100" borderColor="gray">
        <InputLeftElement children={<FaMobileAlt />} color="gray.500"/>
        <Input placeholder="邮箱号" {...emailInput}/>
      </InputGroup>
      <InputGroup bgColor="gray.100" borderColor="gray">
        <InputLeftElement children={<FaLock />} color="gray.500"/>
        <Input type="password" placeholder="设置密码" {...passwordInput}/>
      </InputGroup>
      <Button
        mt="5"
        mb="3"
        borderRadius="20"
        w="100%"
        colorScheme="green"
        onClick={() => handleSubmit()}
      >
        注册
      </Button>
      <Text textAlign="center" color="gray.500">点击 “注册” 即表示您同意并愿意遵守简书</Text>
      <Text textAlign="center" mb="10" mt="1">
        <Link color="blue.500" href="#">
          用户协议
        </Link>
        和
        <Link color="blue.500" href="#">
          隐私政策
        </Link>
      </Text>
      <Text textAlign="center" color="gray.500">社交帐号直接注册</Text>
      <Flex w="25%" justify="space-between" mt="4">
        <FaWeixin fontSize="30" color="green"/>
        <FaQq fontSize="30" color="blue"/>
      </Flex>
    </form> 
  )
}
