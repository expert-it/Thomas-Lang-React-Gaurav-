import React from 'react';
import './style.css';
import {
  Container,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Divider,
  Tabs,
  Text,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  Input,
  TableContainer,
  Table,
  TableCaption,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Tfoot,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import {
  PhoneIcon,
  ArrowDownIcon,
  DragHandleIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  CloseIcon,
} from '@chakra-ui/icons';

const index = () => {
  return (
    <>
      <Container p={0} maxW="none" color="#262626" bg="#f8f8f8">
        <Box className="top-main-bar">
          <Box className="top-bar">
            <PhoneIcon />
            <Heading as="h6" size="xs">
              Marketplace Order Connecter{' '}
            </Heading>
          </Box>
          <Box>
            <ArrowDownIcon />
            <DragHandleIcon />
          </Box>
        </Box>
        <Divider />
        <Box className="order-text">
          <Heading as="h6" size="xs">
            Orders{' '}
          </Heading>
        </Box>
        <Divider />
        <Tabs>
          <TabList className="tabs-main-list">
            <Tab>Orders</Tab>
            <Tab>Products</Tab>
            <Tab>Settings</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box>
                <Heading as="h6" size="xs">
                  Orders{' '}
                </Heading>{' '}
                <Box className="main-tabs-box">
                  <Box className="box-text" maxW="32rem" bg="#0000">
                    <Heading mb={4}>
                      Modern online and offline payments for Africa
                    </Heading>
                    <Text fontSize="xl">402</Text>
                  </Box>
                  <Box className="box-text" maxW="32rem" bg="#0000">
                    <Heading mb={4}>
                      Modern online and offline payments for Africa
                    </Heading>
                    <Text fontSize="xl">402</Text>
                  </Box>
                  <Box className="box-text" maxW="32rem" bg="#0000">
                    <Heading mb={4}>
                      Modern online and offline payments for Africa
                    </Heading>
                    <Text fontSize="xl">402</Text>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              <Heading as="h6" size="xs">
                Products{' '}
              </Heading>{' '}
            </TabPanel>
            <TabPanel>
              <Heading as="h6" size="xs">
                Settings{' '}
              </Heading>{' '}
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Menu>
          <MenuButton
            className="toggle-action"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Box className="table-data-main">
          <Heading as="h6" size="xs">
            Search
            <Stack spacing={3}>
              <Input size="md" />
            </Stack>
          </Heading>
        </Box>
        <Box className="table-tabs">
          <Tabs>
            <TabList className="tabs-table-list">
              <Tab>
                Orders <span className="bubble-table">0</span>
              </Tab>
              <Tab>Products</Tab>
              <Tab>Settings</Tab>
              <Tab>Settings</Tab>
              <Tab>Settings</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <TableContainer>
                  <Table variant="simple">
                   
                    <Thead>
                      <Tr>
                        <Th></Th>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                        <Th>To convert</Th>
                        <Th>into</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <a href="#">40-12121231242</a>
                        </Td>
                        <Td>
                          <span className="second-bg">millimetres (mm)</span>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg"> isNumeric 0.91444</span>
                        </Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CloseIcon className="cros-icon-table" />
                        </Td>
                        <Td isNumeric>25.4</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <a href="#">40-12121231242</a>
                        </Td>
                        <Td>
                          <span className="second-bg">centimetres (cm)</span>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg"> isNumeric 0.91444</span>
                        </Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td isNumeric>25.4</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <a href="#">40-12121231242</a>
                        </Td>
                        <Td>
                          <span className="second-bg">centimetres (cm)</span>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg"> isNumeric 0.91444</span>
                        </Td>
                        <Td isNumeric>0.91444</Td>
                        <Td isNumeric>0.91444</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td isNumeric>0.91444</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <a href="#">40-12121231242</a>
                        </Td>
                        <Td>
                          <span className="second-bg">centimetres (cm)</span>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg"> isNumeric 0.91444</span>
                        </Td>
                        <Td isNumeric>0.91444</Td>
                        <Td isNumeric>0.91444</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td isNumeric>0.91444</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <a href="#">40-12121231242</a>
                        </Td>
                        <Td>
                          <span className="second-bg">centimetres (cm)</span>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg"> isNumeric 0.91444</span>
                        </Td>
                        <Td isNumeric>0.91444</Td>
                        <Td isNumeric>0.91444</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td isNumeric>0.91444</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <Heading as="h6" size="xs">
                  Settings{' '}
                </Heading>{' '}
              </TabPanel>
              <TabPanel>
                <Heading as="h6" size="xs">
                  Settings{' '}
                </Heading>{' '}
              </TabPanel>
              <TabPanel>
                <Heading as="h6" size="xs">
                  Settings{' '}
                </Heading>{' '}
              </TabPanel>
              <TabPanel>
                <Heading as="h6" size="xs">
                  Settings{' '}
                </Heading>{' '}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default index;
