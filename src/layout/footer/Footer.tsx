import NextLink from "next/link";
import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
  LinkProps,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  { name: "Home", path: "/" },
  { name: "Cities", path: "/cities" },
];
const accounts = [
  {
    url: "https://github.com/adrielbaez",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://twitter.com/adrielbaez",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    url: "https://www.linkedin.com/in/adriel-baez/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Stack
      maxW="full"
      marginInline="auto"
      p={4}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      bg="gray.100"
      width="100%"
    >
      <Image
        src="https://i.imgur.com/Dq3x1hl.png"
        alt="Logo mytinerary"
        width={20}
        height={20}
        style={{
          filter: "brightness(0.7)",
        }}
      />

      {/* Desktop Screen */}
      <HStack
        spacing={4}
        alignItems="center"
        display={{ base: "none", md: "flex" }}
      >
        {links.map((link, index) => (
          <CustomLink key={`${link.name}${link.name}${index}`} path={link.path}>
            {link.name}
          </CustomLink>
        ))}
      </HStack>

      {/* Mobile and Tablet Screens */}
      <Stack display={{ base: "flex", md: "none" }} alignItems="center">
        <HStack alignItems="center">
          {links.map((link, index) => (
            <Stack key={`${link.path}${index}`}>
              <CustomLink path={link.path}>{link.name}</CustomLink>
              <Divider h="1rem" orientation="vertical" />
            </Stack>
          ))}
        </HStack>
      </Stack>

      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        {accounts.map((sc, index) => (
          <NextLink key={`${index}${sc.url}`} href={sc.url} passHref>
            <a target="_blank">
              <IconButton
                aria-label={sc.label}
                colorScheme={sc.type}
                icon={sc.icon}
                rounded="md"
              />
            </a>
          </NextLink>
        ))}
      </Stack>
    </Stack>
  );
};

interface CustomLinkProps extends LinkProps {
  path: string;
}

const CustomLink = ({ children, path, ...props }: CustomLinkProps) => {
  return (
    <NextLink href={path} passHref>
      <Link fontSize="sm" _hover={{ textDecoration: "underline" }} {...props}>
        {children}
      </Link>
    </NextLink>
  );
};

export default Footer;
