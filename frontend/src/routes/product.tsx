import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ProductPage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for Product 3.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={8}
      gap={8}
    >
      <Heading>Our Products</Heading>
      <Flex flexWrap="wrap" justifyContent="center" gap={8}>
        {products.map((product) => (
          <Box
            key={product.id}
            maxW="300px"
            borderWidth={1}
            borderRadius={8}
            overflow="hidden"
            boxShadow="lg"
          >
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading size="md" mb={2}>{product.name}</Heading>
              <Text>{product.description}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export const Route = createFileRoute('/product')({
  component: ProductPage,
});

export default ProductPage;