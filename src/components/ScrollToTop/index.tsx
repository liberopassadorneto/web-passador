import { IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { getScroll } from '../../utils/getWindow';

export function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = (event: any) => {
    const offsetFromTop = getScroll(event.target, true);

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (offsetFromTop <= 350) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollUp = () => {
    const element = document.getElementById('hero') as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  return (
    <IconButton
      onClick={scrollUp}
      show={showScroll}
      variant='ghost'
      color='gray.600'
      bgColor='shape'
      borderRadius={6}
      _hover={{ bg: 'shapeHover' }}
      aria-label='Go to top'
      icon={<FaChevronUp fontSize='20px' />}
    />
  );
}
