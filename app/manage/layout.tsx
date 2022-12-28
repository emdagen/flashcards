'use client';

import { Box, HStack, useBreakpointValue } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import { ManageSidebar } from '../../src/components/sidebars';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isSmall = useBreakpointValue({ base: true, md: false });
  const pathname = usePathname();
  const showSidebar = pathname?.startsWith('/manage') || !isSmall;

  return (
    <HStack height='100vh' alignItems='flex-start' flex={1} spacing={0}>
      {showSidebar && <ManageSidebar />}
      {(!pathname?.startsWith('/manage') || !isSmall) && (
        <Box bg='pageDottedBackground' bgSize='16px 16px' w='full' h='full'>
          {children}
        </Box>
      )}
    </HStack>
  );
}
