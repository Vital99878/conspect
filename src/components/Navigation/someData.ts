import { CssPages } from '../../app/store/adtiveMenuItemReducer';
import { NavigationProps, DropdownSection } from './types';

const sectionFlex: DropdownSection<CssPages> = {
  label: 'flex section',
  menuItems: [
    {
      url: 'flex',
      label: 'flex',
    },
    {
      url: 'greed',
      label: 'greed',
    },

    {
      url: 'display',
      label: 'display',
    },
  ],
};

export const dropdownSections: DropdownSection<CssPages>[] = [sectionFlex];
