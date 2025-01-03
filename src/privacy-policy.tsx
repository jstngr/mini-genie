import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Title,
  Text,
  List,
  Anchor,
  Divider,
  Stack,
  ScrollArea,
  Select,
  Flex,
} from '@mantine/core';
import { useLocation, useNavigate } from 'react-router';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();
  const setLanguageFromHash = () => {
    if (location.pathname.includes('/de')) {
      i18n.changeLanguage('de-DE');
    } else {
      i18n.changeLanguage('en-GB');
    }
  };

  useEffect(() => {
    setLanguageFromHash();
  }, [location.pathname]);

  const handleLanguageChange = (language) => {
    navigate(`${language.split('-')[0]}`);
  };

  return (
    <ScrollArea scrollbars="y">
      <Container pt="2rem" pb="4rem" px="1rem">
        <Stack gap="md">
          <Flex justify="end">
            <Select
              label={t('languageSelector.label')}
              placeholder={`${t('languageSelector.placeholder')}`}
              data={[
                { value: 'en-GB', label: 'English' },
                { value: 'de-DE', label: 'Deutsch' },
              ]}
              onChange={handleLanguageChange}
              defaultValue={i18n.language} // Default to current language
            />
          </Flex>
          <Title order={1} ta="center">
            {t('privacyPolicy.title')}
          </Title>
          <Text align="center" c="dimmed">
            {t('privacyPolicy.effectiveDate')} <strong>{t('privacyPolicy.date')}</strong>
          </Text>

          <Divider my="lg" />

          {/* Welcome Section */}
          <Title order={2}>{t('privacyPolicy.welcomeTitle')}</Title>
          <Text>{t('privacyPolicy.welcomeText')}</Text>

          {/* Section 1 */}
          <Title order={3}>{t('privacyPolicy.section1.title')}</Title>
          <Text>{t('privacyPolicy.section1.description')}</Text>
          <List withPadding>
            <List.Item>
              <strong>{t('privacyPolicy.section1.deviceInfo.title')}</strong>{' '}
              {t('privacyPolicy.section1.deviceInfo.text')}
            </List.Item>
            <List.Item>
              <strong>{t('privacyPolicy.section1.usageData.title')}</strong>{' '}
              {t('privacyPolicy.section1.usageData.text')}
            </List.Item>
            <List.Item>
              <strong>{t('privacyPolicy.section1.locationData.title')}</strong>{' '}
              {t('privacyPolicy.section1.locationData.text')}
            </List.Item>
          </List>

          {/* Section 2 */}
          <Title order={3}>{t('privacyPolicy.section2.title')}</Title>
          <Text>{t('privacyPolicy.section2.description')}</Text>
          <List withPadding>
            <List.Item>{t('privacyPolicy.section2.demographicData')}</List.Item>
            <List.Item>{t('privacyPolicy.section2.contextualData')}</List.Item>
          </List>
          <Text>
            {t('privacyPolicy.section2.learnMore')}{' '}
            <Anchor href="https://policies.google.com/privacy" target="_blank">
              https://policies.google.com/privacy
            </Anchor>
          </Text>

          {/* Section 3 */}
          <Title order={3}>{t('privacyPolicy.section3.title')}</Title>
          <Text>{t('privacyPolicy.section3.description')}</Text>
          <List withPadding>
            <List.Item>
              <strong>{t('privacyPolicy.section3.android.title')}</strong>{' '}
              {t('privacyPolicy.section3.android.text')}
            </List.Item>
            <List.Item>
              <strong>{t('privacyPolicy.section3.ios.title')}</strong>{' '}
              {t('privacyPolicy.section3.ios.text')}
            </List.Item>
          </List>

          {/* Section 4 */}
          <Title order={3}>{t('privacyPolicy.section4.title')}</Title>
          <Text>{t('privacyPolicy.section4.description')}</Text>

          {/* Section 5 */}
          <Title order={3}>{t('privacyPolicy.section5.title')}</Title>
          <Text>{t('privacyPolicy.section5.description')}</Text>

          {/* Section 6 */}
          <Title order={3}>{t('privacyPolicy.section6.title')}</Title>
          <Text>{t('privacyPolicy.section6.description')}</Text>

          {/* Section 7 */}
          <Title order={3}>{t('privacyPolicy.section7.title')}</Title>
          <Text>
            {t('privacyPolicy.section7.description')}{' '}
            <Anchor href="mailto:contact@mini-genie.de" target="_blank">
              contact@mini-genie.de
            </Anchor>
          </Text>
        </Stack>
      </Container>
    </ScrollArea>
  );
};

export default PrivacyPolicy;
