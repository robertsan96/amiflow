import NavLayout from "@/components/layout/nav.layout";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
  Badge,
  SimpleGrid,
  Flex,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

export default function Database() {
  return (
    <NavLayout name="Connections">
      <SimpleGrid columns={2} spacing={10}>
        <Card variant="outline">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Logs Server</Heading>
              <Text>
                The logs server is located under John's office. Make sure not to
                unplug while cleaning the desk.
              </Text>
              <TableContainer>
                <Table size="sm" variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Status</Th>
                      <Th isNumeric></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Engine</Td>
                      <Td>
                        <Flex justifyContent="end">
                          <DiMongodb color="green" />
                        </Flex>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Size</Td>
                      <Td isNumeric>1.2 Gb</Td>
                    </Tr>
                    <Tr>
                      <Td>Collections</Td>
                      <Td isNumeric>50</Td>
                    </Tr>
                    <Tr>
                      <Td>Check Alive</Td>
                      <Td isNumeric>
                        <Badge colorScheme="green">Connection OK</Badge>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup>
              <Button variant="solid" colorScheme="blue">
                Inspect
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card variant="outline">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">CRM Calls Server</Heading>
              <Text></Text>
              <TableContainer>
                <Table size="sm" variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Status</Th>
                      <Th isNumeric></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Engine</Td>
                      <Td>
                        <Flex justifyContent="end">
                          <DiMongodb color="green" />
                        </Flex>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Size</Td>
                      <Td isNumeric>1.2 Gb</Td>
                    </Tr>
                    <Tr>
                      <Td>Collections</Td>
                      <Td isNumeric>50</Td>
                    </Tr>
                    <Tr>
                      <Td>Check Alive</Td>
                      <Td isNumeric>
                        <Badge colorScheme="orange">Unstable</Badge>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup>
              <Button variant="solid" colorScheme="blue">
                Inspect
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>{" "}
        <Card variant="outline">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">Timisoara Office #1</Heading>
              <Text>
                The hq server base. This server should see no downtime.
              </Text>
              <TableContainer>
                <Table size="sm" variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Status</Th>
                      <Th isNumeric></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Engine</Td>
                      <Td>
                        <Flex justifyContent="end">
                          <SiPostgresql color="blue" />
                        </Flex>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Size</Td>
                      <Td isNumeric>0.2 Gb</Td>
                    </Tr>
                    <Tr>
                      <Td>Tables</Td>
                      <Td isNumeric>12</Td>
                    </Tr>
                    <Tr>
                      <Td>Check Alive</Td>
                      <Td isNumeric>
                        <Badge colorScheme="red">No Connection</Badge>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup>
              <Button variant="solid" colorScheme="blue">
                Inspect
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </NavLayout>
  );
}
