
import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomDropdown from './CustomDropdown';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (option) => {
    i18n.changeLanguage(option.code);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '/flags/US.png' },
    { code: 'tr', name: 'Türkçe', flag: '/flags/TR.png' },
  ];

  return (
    <CustomDropdown
      options={languages}
      value={i18n.language}
      onChange={changeLanguage}
    />
  );
};

export default LanguageSwitcher;
