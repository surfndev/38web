import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';
import shampoo from '../assets/images/shampoo.png';
import condit from '../assets/images/conditoner.png';
import essen from '../assets/images/essential.png';

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
      name: '八草本養髪洗頭水',
      description: '功能：\n 滋養髪囊\n 滋養髪囊\n 氣血充盈流暢\n 補血行氣\n 脫髮減少\n\ 新髪復甦\n 減低鬚髪早白\n 止頭養去頭皮',
      image: shampoo,
    },
    {
      id: 2,
      name: '八草本養育髮精華',
      description: '功能：\n 滋養髪囊\n 氣血充盈流暢\n 補血行氣\n 脫髮減少\n 新髪復甦\n 減低鬚髪早白',
      image: condit,
    },
    {
      id: 3,
      name: '八草本養育髮精華',
      description: '功能:\n 滋養髪囊\n 氣血充盈流暢\n 補血行氣\n 脫髮減少\n 新髪復甦\n 減低鬚髪早白',
      image: essen,
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
      <Heading>產品</Heading>
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

export const Route = createFileRoute('/products')({
  component: ProductPage,
});

export default ProductPage;