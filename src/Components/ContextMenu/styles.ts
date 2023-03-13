import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { styled } from '../../../stitches.config';

const itemStyles = {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: '$purple11',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 5px',
    position: 'relative',
    paddingLeft: 25,
    userSelect: 'none',
    '&[data-disabled]': {
        color: '$mauve8',
        pointerEvents: 'none',
    },

    '&:focus': {
        backgroundColor: '$purple9',
        color: '$purple1',
    },
};

export const Container = styled(ContextMenuPrimitive.Content, {
    minWidth: 220,
    backgroundColor: '$loContrast',
    borderRadius: 6,
    overflow: 'hidden',
    padding: 5,
    zIndex: 999,

    boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const Separator = styled(ContextMenuPrimitive.Separator, {
    height: 1,
    backgroundColor: '$purple6',
    margin: 5,
});


export const RightSlot = styled('div', {
    marginLeft: 'auto',
    paddingLeft: 20,
    color: '$mauve11',
    ':focus > &': { color: '$loContrast' },
    '[data-disabled] &': { color: '$mauve8' },
});

export const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });

export const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
    ...itemStyles,
});

