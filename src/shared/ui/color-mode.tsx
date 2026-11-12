import { MoonIcon, SunIcon } from 'lucide-react';
import { useColorMode } from '../hooks/use-color-mode';
import { Button } from './button';

export const ColorModeToggle = () => {
  const { isDark, isSubmitting, toggle } = useColorMode();

  return (
    <Button
      variant="icon"
      type="button"
      onClick={toggle}
      disabled={isSubmitting}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
