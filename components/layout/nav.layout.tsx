import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import NavBar from "../navigation/navbar";
import styles from "./nav.layout.module.css";

type NavLayoutProps = {
  name: string;
  children: React.ReactNode;
};

export default function NavLayout({ name, children }: NavLayoutProps) {
  return (
    <>
      <NavBar />
      <Box mx="auto" mt="8" width="container.lg">
        <Heading as="h5" size="1xl" noOfLines={1}>
          {name}
        </Heading>
      </Box>
      <section className={styles.PageContainer}>
        <Box
          mx="auto"
          bg="white"
          mt="2"
          p="5"
          width="container.lg"
          className="page-container"
          borderRadius="lg"
        >
          {children}
        </Box>
      </section>
    </>
  );
}
