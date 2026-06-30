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

const LumaPrivacyPage = () => {
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

  const handleLanguageChange = (language: string) => {
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
              defaultValue={i18n.language}
            />
          </Flex>
          <Title order={1} ta="center">
            {t('lumaPrivacyPolicy.title')}
          </Title>
          <Text ta="center" c="dimmed">
            {t('lumaPrivacyPolicy.lastUpdated')}
          </Text>

          <Divider my="lg" />

          {/* Section 1 */}
          <Title order={3}>{t('lumaPrivacyPolicy.section1.title')}</Title>
          <Text>{t('lumaPrivacyPolicy.section1.p1')}</Text>
          <Text>{t('lumaPrivacyPolicy.section1.p2')}</Text>

          {/* Section 2 */}
          <Title order={3}>{t('lumaPrivacyPolicy.section2.title')}</Title>
          <Text>{t('lumaPrivacyPolicy.section2.description')}</Text>
          <List withPadding>
            <List.Item>{t('lumaPrivacyPolicy.section2.item1')}</List.Item>
            <List.Item>{t('lumaPrivacyPolicy.section2.item2')}</List.Item>
            <List.Item>{t('lumaPrivacyPolicy.section2.item3')}</List.Item>
          </List>

          {/* Section 3 */}
          <Title order={3}>{t('lumaPrivacyPolicy.section3.title')}</Title>
          <Text>{t('lumaPrivacyPolicy.section3.description')}</Text>
          <List withPadding>
            <List.Item>{t('lumaPrivacyPolicy.section3.item1')}</List.Item>
            <List.Item>{t('lumaPrivacyPolicy.section3.item2')}</List.Item>
            <List.Item>{t('lumaPrivacyPolicy.section3.item3')}</List.Item>
            <List.Item>{t('lumaPrivacyPolicy.section3.item4')}</List.Item>
          </List>

          {/* Section 4 */}
          <Title order={3}>{t('lumaPrivacyPolicy.section4.title')}</Title>
          <Text>{t('lumaPrivacyPolicy.section4.p1')}</Text>
          <Text>{t('lumaPrivacyPolicy.section4.p2')}</Text>
          <Text>
            {t('lumaPrivacyPolicy.section4.p3')}{' '}
            <Anchor href="https://policies.google.com/technologies/partner-sites" target="_blank">
              {t('lumaPrivacyPolicy.section4.googleLink')}
            </Anchor>
          </Text>

          {/* Section 5 */}
          <Title order={3}>{t('lumaPrivacyPolicy.section5.title')}</Title>
          <Text>{t('lumaPrivacyPolicy.section5.p1')}</Text>
          <Text>{t('lumaPrivacyPolicy.section5.p2')}</Text>

          {/* Section 6 */}
          <Title order={3}>{t('lumaPrivacyPolicy.section6.title')}</Title>
          <Text>{t('lumaPrivacyPolicy.section6.p1')}</Text>

          {/* Section 7 */}
          <Title order={3}>{t('lumaPrivacyPolicy.section7.title')}</Title>
          <Text>
            {t('lumaPrivacyPolicy.section7.description')}{' '}
            <Anchor href="mailto:support.minigenie@gmail.com" target="_blank">
              support.minigenie@gmail.com
            </Anchor>
          </Text>
        </Stack>
      </Container>
    </ScrollArea>
  );
};

export default LumaPrivacyPage;
