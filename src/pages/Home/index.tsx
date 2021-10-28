import { Flex } from '@chakra-ui/react';
import React from 'react';
import { CustomersSection } from '../../components/CustomersSection';
import { FeaturesSection } from '../../components/FeaturesSection';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { SquadSection } from '../../components/SquadSection';

export default function Home() {
  return (
    <Flex direction='column' w='100vw' h='100vh' overflowX='hidden'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CustomersSection />
      <SquadSection />
      <Footer />
    </Flex>
  );
}
