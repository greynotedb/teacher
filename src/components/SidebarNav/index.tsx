"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  InputLeftElement,
  InputGroup,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  FiGrid,
  FiFolder,
  FiFile,
  FiMenu,
  FiChevronRight,
} from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineRight, AiOutlineQuestionCircle } from "react-icons/ai";
import { TbMailDown } from "react-icons/tb";
import { RiContactsBookLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  handleNav: () => void;
  test: string;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface SidebarWithHeader {
  children: React.ReactNode;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiGrid, url: "/" },
  { name: "Graycases", icon: RiContactsBookLine, url: "/graycases" },
  { name: "My Classroom", icon: FiFolder, url: "/myclassroom" },
  { name: "My Notes", icon: FiFile, url: "/mynotes" },
  { name: "Requests", icon: TbMailDown, url: "/requests" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [active, setActive] = useState("");
  const pathName = usePathname();
  const router = useRouter();

  const handleNavlinkClick = ({ url }: { url: any }) => {
    router.push(url);
  };

  useEffect(() => {
    if (pathName.includes("/graycases")) {
      setActive("/graycases");
    } else if (pathName.includes("/myclassroom")) {
      setActive("/myclassroom");
    } else if (pathName.includes("/mynotes")) {
      setActive("/mynotes");
    } else if (pathName.includes("/requests")) {
      setActive("/requests");
    } else {
      setActive("/");
    }
  }, [pathName]);

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignContent={"space-between"}
      transition="3s ease"
      bg={"#E4B972"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Box
        h="100%"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <Box
            backgroundColor={"#fff"}
            py={"1rem"}
            display={"flex"}
            justifyContent={"center"}
          >
            <HStack>
              <Avatar size={"md"} src={"/images/greylogorounded.png"} />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
              >
                <Text fontSize="sm">Greynote Database</Text>
                <Text fontSize="sm" color="#B1B1B1">
                  School Management
                </Text>
              </VStack>
            </HStack>
            <CloseButton
              display={{ base: "flex", md: "none" }}
              onClick={onClose}
            />
          </Box>

          <Box mt={"1rem"} display={"col"} justifyContent={"space-between"}>
            {LinkItems.map((link) => (
              <NavItem
                key={link.name}
                icon={link.icon}
                handleNav={() => handleNavlinkClick({ url: link.url })}
                test={link.url}
                backgroundColor={active === link.url ? "white" : ""}
                color={active === link.url ? "#000" : "#fff"}
              >
                {link.name}
              </NavItem>
            ))}
          </Box>
        </Box>

        <Box m="2" bg={"#B08F58"} py={"0.5rem"} rounded={"md"}>
          <Box
            as={"a"}
            w={"full"}
            bg={"transparent"}
            display={"flex"}
            alignItems={"center"}
            px={"1rem"}
            py={"0.5rem"}
            _hover={{ backgroundColor: "#66563B", cursor: "pointer" }}
            rounded={"md"}
            color={"#fff"}
          >
            <BiMessageDetail />
            <Text mx={"0.5rem"}>Send Feedback</Text>
          </Box>
          <Box
            as={"a"}
            w={"full"}
            bg={"transparent"}
            display={"flex"}
            alignItems={"center"}
            px={"1rem"}
            py={"0.5rem"}
            _hover={{ backgroundColor: "#66563B", cursor: "pointer" }}
            rounded={"md"}
            color={"#fff"}
          >
            <AiOutlineQuestionCircle />
            <Text mx={"0.5rem"}>Get Help</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const NavItem = ({
  icon,
  children,
  handleNav,
  test,
  ...rest
}: NavItemProps) => {
  const pathName = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathName.includes("/graycases")) {
      setActive("/graycases");
    } else if (pathName.includes("/myclassroom")) {
      setActive("/myclassroom");
    } else if (pathName.includes("/mynotes")) {
      setActive("/mynotes");
    } else if (pathName.includes("/requests")) {
      setActive("/requests");
    } else {
      setActive("/");
    }
  }, [pathName]);

  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={handleNav}
      fontSize={"sm"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        p={3}
        m="2"
        color={"#fff"}
        borderRadius="md"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "white",
          color: "#000",
          transitionDuration: "1s",
        }}
        {...rest}
      >
        <Flex alignItems={"center"}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              color={test === active ? "#FDBC52" : "white"}
              _groupHover={{
                color: "#FDBC52",
              }}
              _focus={{ color: "#FDBC52" }}
              as={icon}
            />
          )}
          {children}
        </Flex>
        <Icon
          as={AiOutlineRight}
          fontSize={"12"}
          display={pathName === test ? "block" : "none"}
        />
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"#F1F1F1"}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text> */}

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                >
                  <Text fontSize="sm" fontWeight={"500"}>
                    Mayowa Chinedu
                  </Text>
                  <Text fontSize="sm" color="#B1B1B1">
                    Greenfield High School
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronRight />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>

      <Box display={"flex"} justifyContent={"space-between"} gap={5}>
        <InputGroup w={"auto"}>
          <InputLeftElement pointerEvents="none">
            <GoSearch color="#C2C2C2" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search"
            borderColor={"#C2C2C2"}
            backgroundColor={"#F4F4F4"}
            _placeholder={{ color: "#C2C2C2" }}
          />
        </InputGroup>

        <Button
          px={"0"}
          color={"#374957"}
          backgroundColor={"#F4F4F4"}
          border={"1px solid #C2C2C2"}
        >
          <IoSettingsOutline />
        </Button>
      </Box>
    </Flex>
  );
};

const SidebarWithHeader = ({ children }: SidebarWithHeader) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={usePathname() === "/" ? "0" : "4"}>
        {/* Content */}
        {children}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
