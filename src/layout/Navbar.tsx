import NextLink from "next/link";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";

import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Cities", path: "/cities" },
];

const dropdownLinks = [
  {
    name: "Sign In",
    path: "#",
    icon: <FaUserAlt />,
  },
  {
    name: "Register",
    path: "#",
    icon: AiTwotoneThunderbolt,
  },
];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <Box
      px={4}
      boxShadow="lg"
      width="100%"
      position="sticky"
      top={0}
      zIndex={400}
      bg="gray.100"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW={800}
        mx="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems="center">
          <NextLink href="/" passHref>
            <a>
              <Image
                src="https://i.imgur.com/Dq3x1hl.png"
                alt="Logo mytinerary"
                width={40}
                height={40}
                style={{
                  filter: "brightness(0.7)",
                }}
                priority
              />
            </a>
          </NextLink>
          <HStack
            as="nav"
            spacing={1}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </HStack>
        </HStack>
        {/* Dropdown Menu */}
        <Menu autoSelect={false} isLazy>
          {({ isOpen, onClose }) => (
            <>
              <MenuButton _hover={{ color: "blue.400" }}>
                <Flex alignItems="center">
                  <Avatar
                    href="#"
                    as={Link}
                    size="sm"
                    showBorder={true}
                    borderColor="blue.400"
                    rounded="full"
                    src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                  />
                </Flex>
              </MenuButton>
              <MenuList
                zIndex={5}
                bg={useColorModeValue("rgb(255, 255, 255)", "rgb(26, 32, 44)")}
                border="none"
                boxShadow={useColorModeValue(
                  "2px 4px 6px 2px rgba(160, 174, 192, 0.6)",
                  "2px 4px 6px 2px rgba(9, 17, 28, 0.6)"
                )}
              >
                {dropdownLinks.map((link, index) => (
                  <MenuLink
                    key={index}
                    name={link.name}
                    path={link.path}
                    onClose={onClose}
                  />
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box
          pb={4}
          display={["inherit", "inherit", "none"]}
          position="absolute"
          bg={"gray.100"}
          width="100%"
          left={0}
        >
          <Stack as="nav" spacing={2} align={"center"}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  const link = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("primary.400", "primary.200"),
  };

  return (
    <NextLink href={path} passHref>
      <Link
        px={3}
        py={1}
        lineHeight="inherit"
        rounded="md"
        _hover={{
          textDecoration: "none",
          bg: link.bg,
          color: link.color,
        }}
        onClick={() => onClose()}
      >
        {name}
      </Link>
    </NextLink>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <NextLink href={path} passHref>
      <Link onClick={() => onClose()} lineHeight="inherit">
        <MenuItem
          _hover={{
            textDecoration: "none",
            color: "blue.400",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
        >
          <Text>{name}</Text>
        </MenuItem>
      </Link>
    </NextLink>
  );
};
