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
  Image,
} from '@chakra-ui/react';
import {
  PhoneIcon,
  ArrowDownIcon,
  DragHandleIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  CloseIcon,
  BellIcon,
} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

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
        <Box className='bell-icon-main'>
          <TabList className="tabs-main-list">
            <Tab>Orders</Tab>
            <Tab>Products</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <Box className='bell-icon'>
         <BellIcon/>
        </Box>
        </Box>
          <TabPanels className='tabs-content'>
            <TabPanel>
              <Box>
                <Heading as="h6" size="xs">
                  Orders{' '}
                </Heading>{' '}
                <Box className="main-tabs-box">
                  <Box className="box-text" maxW="32rem" bg="#0000">
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                     Total Orders Processed
                    </Heading>
                    <Text fontSize="xl">402</Text>
                    </Box>
                    <Box boxSize='sm' className='image-order-bx'>
                    <Image src='../images/graph-blue.png' />
                    </Box>
                  </Box>
                  <Box className="box-text" maxW="32rem" bg="#0000">
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                     Orders Processed Today
                    </Heading>
                    <Text fontSize="xl">1</Text>
                    </Box>
                    <Box boxSize='sm' className='image-order-bx'>
                    <Image src='../images/graph-yellow.png' />
                    </Box>
                  </Box>
                  <Box className="box-text" maxW="32rem" bg="#0000">
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                     Last Order Received
                    </Heading>
                    <Text fontSize="xl">Wed 28-09-2022 18:15</Text>
                    </Box>
                    <Box boxSize='sm' className='image-order-bx'>
                    <Image src='../images/graph-green.png' />
                    </Box>
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
                Pending orders <span className="bubble-table">0</span>
              </Tab>
              <Tab>Imported orders</Tab>
              <Tab>Failed import</Tab>
              <Tab>All</Tab>
              <Tab>Archived orders</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <TableContainer>
                  <Table variant="simple">
                   
                    <Thead>
                      <Tr>
                        <Th></Th>
                        <Th>Order Number</Th>
                        <Th>Sales Channel</Th>
                        <Th isNumeric>Type</Th>
                        <Th>Order Date</Th>
                        <Th>Shipping Name</Th>
                        <Th isNumeric>Imported in Shopify</Th>
                        <Th>Tracking Synced</Th>
                        <Th>Order Total</Th>
                      </Tr>
                    </Thead>
                    <Tbody className='data-table'>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <Link to="/orderdetail">402-6060100-6507523</Link>
                        </Td>
                        <Td>
                        <Box className='main-bubble'>
                          <span className="second-bg">Amazon IT</span>
                          </Box>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg">FBS</span>
                        </Td>
                        <Td isNumeric>Wed 28-09-2022 17:35</Td>
                        <Td isNumeric>25.4</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CloseIcon className="cros-icon-table" />
                        </Td>
                        <Td isNumeric>$25.48</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <Link to="/orderdetail">402-6701396-9261153</Link>
                        </Td>
                        <Td>
                        <Box className='main-bubble'>
                          <span className="second-bg">Amazon FR</span>
                          </Box>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg">FBS</span>
                        </Td>
                        <Td isNumeric>Tues 13-09-2022 17:52</Td>
                        <Td isNumeric>25.4</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td isNumeric>$21.89</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <Link to="/orderdetail">171-4653114-9802763</Link>
                        </Td>
                        <Td>
                        <Box className='main-bubble'>
                        <span className="second-bg">Amazon FR</span>
                        </Box>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg">FBS</span>
                        </Td>
                        <Td isNumeric>Mon 12-09-2022 13:41</Td>
                        <Td isNumeric>25.4</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td isNumeric>$21.89</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <Link to="/orderdetail">171-6638920-2497115</Link>
                        </Td>
                        <Td>
                        <Box className='main-bubble'>
                        <span className="second-bg">Amazon IT</span>
                        </Box>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg">FBS</span>
                        </Td>
                        <Td isNumeric>Thu 01-09-2022 06:33</Td>
                        <Td isNumeric>0.91444</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td isNumeric>$63.70</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Checkbox></Checkbox>
                        </Td>
                        <Td>
                          <Link to="/orderdetail">1394274628</Link>
                        </Td>
                        <Td>
                          <Box className='main-bubble'>
                          <span className="second-bg">Bol.com</span>
                          </Box>
                        </Td>
                        <Td>
                          {' '}
                          <span className="third-bg"> FBS</span>
                        </Td>
                        <Td isNumeric>Tue 30-08-2022 14:01</Td>
                        <Td isNumeric>0.91444</Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td>
                          <CheckCircleIcon />
                        </Td>
                        <Td isNumeric>$9.75</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default index;
