import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { CheckIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { atom, useAtom } from 'jotai';
import { ReactNode, useLayoutEffect } from 'react';
import { darkTheme, styled } from '../../../stitches.config';
import { RightSlot, StyledCheckboxItem, Container, StyledItem, StyledItemIndicator, Separator } from "./styles"

interface ContextMenuProps {
  children: ReactNode;
}

const Box = styled('div', {});

const themeStableAtom = atom(darkTheme || 'theme-default');


const ContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
  const [theme, setTheme] = useAtom(themeStableAtom);

  const handleBack = () => {
    history.back();
  };

  const handleGo = () => {
    history.go();
  };

  const handleReload = () => {
    location.reload();
  };

  useLayoutEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Box>
      <ContextMenuPrimitive.Root>
        <ContextMenuPrimitive.Trigger>{children}</ContextMenuPrimitive.Trigger>
        <Container >
          <StyledItem onClick={handleBack}>
            Voltar <RightSlot>⌘+[</RightSlot>
          </StyledItem>
          <StyledItem onClick={handleGo}>
            Avançar <RightSlot>⌘+[</RightSlot>
          </StyledItem>
          <StyledItem onClick={handleReload}>
            Recarregar <RightSlot>⌘+R</RightSlot>
          </StyledItem>
          <Separator />
          <StyledCheckboxItem
            checked={theme !== darkTheme}
            onCheckedChange={() => setTheme('theme-default')}
          >
            <StyledItemIndicator>
              <CheckIcon />
            </StyledItemIndicator>
            Light Theme{' '}
            <RightSlot>
              <SunIcon />
            </RightSlot>
          </StyledCheckboxItem>
          <StyledCheckboxItem
            checked={theme === darkTheme}
            onCheckedChange={() => setTheme(darkTheme)}
          >
            <StyledItemIndicator>
              <CheckIcon />
            </StyledItemIndicator>
            Dark Theme{' '}
            <RightSlot>
              <MoonIcon />
            </RightSlot>
          </StyledCheckboxItem>
        </Container>
      </ContextMenuPrimitive.Root>
    </Box>
  );
}

export default ContextMenu;