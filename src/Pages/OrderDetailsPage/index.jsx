import React from 'react';
import {
  Container,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
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
  Image,
} from '@chakra-ui/react';
import {
  PhoneIcon,
  ArrowDownIcon,
  DragHandleIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  CloseIcon,
  ArrowBackIcon,
  ViewIcon,
  BellIcon,
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
        <Divider/>
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
                <Box className='top-shopifybar'>
                <Box className='top-bakc-head'>
                <Heading as="h6" size="xs">
                <a href="/"><ArrowBackIcon className='bak-icon' /></a> Orders Details (402-6060100-6507523)
                </Heading>{' '}
                </Box>
                <Box className='top-bakc-icons'>
                 <Box className='shopify-icon'>
                   <ViewIcon/> View on  Shopify
                 </Box>
                 <Box className='shopify-icon'>
                   <ViewIcon/> View on  Amazon
                 </Box>
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
                </Box>
                </Box>
                <Box className="main-tabs-box inner-detail-box">
                  <Box className="box-text" maxW="32rem" bg="#0000">
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                    Sales Channel
                    </Heading>
                    <Text fontSize="xl">Amazon FR (amazon)</Text>
                    </Box>
                    <Divider/>
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                    Order Number
                    </Heading>
                    <Text fontSize="xl">402-6060100-6507523</Text>
                    </Box>
                    <Divider/>
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                    Order Date
                    </Heading>
                    <Text fontSize="xl">Wed 28-09-2022 17:35</Text>
                    </Box>
                    
                  </Box>
                  <Box className="box-text box-second" maxW="32rem" bg="#0000">
                    <Box className='text-order-box box-cheked'>
                    <Heading mb={4}>
                    Imported into Shopify
                    </Heading>
                    <Text fontSize="xl"><CheckCircleIcon /></Text>
                    </Box>
                    <Box className='text-order-box box-cheked'>
                    <Heading mb={4}>
                    Tracking Synced
                    </Heading>
                    <Text fontSize="xl"><CheckCircleIcon /></Text>
                    </Box>
                    <Box className='text-order-box box-cheked'>
                    <Heading mb={4}>
                   Cancelled
                    </Heading>
                    <Text className='close-inner' fontSize="xl"><CloseIcon /></Text>
                    </Box>
                    <Box className='text-order-box box-cheked'>
                    <Heading mb={4}>
                    Cancel Reason
                    </Heading>
                    <Text fontSize="xl">-</Text>
                    </Box>
                  </Box>
                  <Box className="third-box box-text" maxW="32rem" bg="#0000">
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                     Shipping Address
                    </Heading>
                    <Text fontSize="xl">Wed 28-09-2022 18:15</Text>
                    </Box>
                  </Box>
                </Box>
                <Box className='product-detail'>
              <Heading mb={4}>
                     Products
                    </Heading>
                    <Box className='card-product'>
                      <Box className='image-div-inner'>
                    <Image src='../images/product-wash.png' />
                    </Box>
                    <Box className='prod-title'>
                    <Heading mb={4}>
                    Product name  60ml
                    </Heading>
                    </Box>
                    <Box className='Barcode-text'>
                    <Heading mb={4}>
                   Barcode: 400
                    </Heading>
                    </Box>
                    <Box className='qty-text'>
                    <Heading mb={4}>
                   Quantity: 2
                    </Heading>
                    </Box>
                    <Box className='post-text'>
                    <Heading mb={4}>
                   Post NL: <a href='#'>3SYZXG1636432</a>
                    </Heading>
                    </Box>
                    </Box>
              </Box>
              <Box className="main-tabs-box inner-detail-box subtotal-box">
                  <Box className="box-text" maxW="32rem" bg="#0000">
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                   Order Subtotal
                    </Heading>
                    <Text fontSize="xl">$13.90</Text>
                    </Box>
                    <Divider/>
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                    Shipping Costs
                    </Heading>
                    <Text fontSize="xl">$7.99</Text>
                    </Box>
                    <Divider/>
                    <Box className='text-order-box'>
                    <Heading mb={4}>
                    Order Total
                    </Heading>
                    <Text fontSize="xl">$21.89</Text>
                    </Box>            
                  </Box>
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
     


     </Container>
    </>
  );
};

export default index;
