import useUpdateInput from "./useUpdateInput"
import {
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  Checkbox,
  Text,
  Flex,
  Spacer,
  useToast
} from "@chakra-ui/react"
import { FaUserAlt, FaLock, FaWeibo, FaQq, FaWeixin } from "react-icons/fa"
import axios from 'axios'

export default function SignIn() {
  const emailInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')
  const toast = useToast()
  const handleSubmit = async () => {
    if (!emailInput.value ||
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
      email: emailInput.value,
      password: passwordInput.value
    }
    try {
      await axios.post("https://conduit.productionready.io/api/users/login", {user})
      return toast({
        title: "登录成功",
        status: "success",
        isClosable: true,
        position: "top",
        duration: "2000"
      })
    }catch (err) {
      const errMsg = Object.keys(err.response.data.errors)[0] + ': ' + Object.values(err.response.data.errors)[0]
      console.log(errMsg)
      return toast({
        title: errMsg,
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
        <Input placeholder="手机号或邮箱" {...emailInput} />
      </InputGroup>
      <InputGroup bgColor="gray.100" borderColor="gray">
        <InputLeftElement children={<FaLock />} color="gray.500"/>
        <Input type="password" placeholder="密码" {...passwordInput}/>
      </InputGroup>
      <Flex mt="4">
        <Checkbox defaultIsChecked mr="2"></Checkbox>
        <Text color="gray.500">记住我</Text>
        <Spacer />
        <Text color="gray.500">登录遇到问题</Text>
      </Flex>
      <Button
        mt="5"
        mb="10"
        borderRadius="20"
        w="100%"
        colorScheme="blue"
        onClick={() => handleSubmit()}
      >
        登录
      </Button>
      <Text textAlign="center" color="gray.500">社交账号登录</Text>
      <Flex w="50%" justify="space-between" mt="4">
        <FaWeibo fontSize="30" color="red"/>
        <FaWeixin fontSize="30" color="green"/>
        <FaQq fontSize="30" color="blue"/>
      </Flex>
    </form> 
  )
}
