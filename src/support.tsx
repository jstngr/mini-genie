import React, { useEffect } from 'react';
import {
  Container,
  Title,
  Text,
  List,
  Anchor,
  Divider,
  Stack,
  ScrollArea,
  Flex,
  Select,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

const SupportPage = () => {
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
              defaultValue={i18n.language}
            />
          </Flex>
          <Title order={1} ta="center">
            {t('support.title')}
          </Title>

          <Text align="center" c="dimmed">
            {t('support.subtitle')}
          </Text>

          <Divider my="lg" />

          {/* Getting Started Section */}
          <Title order={2}>{t('support.gettingStarted.title')}</Title>
          <Text>{t('support.gettingStarted.description')}</Text>
          <List withPadding>
            <List.Item>
              <strong>{t('support.gettingStarted.item1Title')}:</strong>{' '}
              {t('support.gettingStarted.item1Description')}
            </List.Item>
            <List.Item>
              <strong>{t('support.gettingStarted.item2Title')}:</strong>{' '}
              {t('support.gettingStarted.item2Description')}
            </List.Item>
            <List.Item>
              <strong>{t('support.gettingStarted.item3Title')}:</strong>{' '}
              {t('support.gettingStarted.item3Description')}
            </List.Item>
          </List>

          <Divider my="lg" />

          {/* Troubleshooting Section */}
          <Title order={2}>{t('support.troubleshooting.title')}</Title>
          <Text>{t('support.troubleshooting.description')}</Text>
          <List withPadding>
            <List.Item>
              <strong>{t('support.troubleshooting.item1Title')}:</strong>{' '}
              {t('support.troubleshooting.item1Description')}
            </List.Item>
            <List.Item>
              <strong>{t('support.troubleshooting.item2Title')}:</strong>{' '}
              {t('support.troubleshooting.item2Description')}
            </List.Item>
            <List.Item>
              <strong>{t('support.troubleshooting.item3Title')}:</strong>{' '}
              {t('support.troubleshooting.item3Description')}
            </List.Item>
          </List>

          <Divider my="lg" />

          {/* Contact Support Section */}
          <Title order={2}>{t('support.contact.title')}</Title>
          <Text>{t('support.contact.description')}</Text>
          <List withPadding>
            <List.Item>
              <strong>{t('support.contact.emailTitle')}:</strong>{' '}
              <Anchor href="mailto:contact@mini-genie.de" target="_blank">
                contact@mini-genie.de
              </Anchor>
            </List.Item>
          </List>

          <Divider my="lg" />

          {/* Feedback Section */}
          <Title order={2}>{t('support.feedback.title')}</Title>
          <Text>{t('support.feedback.description')}</Text>
          <List withPadding>
            <List.Item>
              <strong>{t('support.feedback.provideTitle')}:</strong>{' '}
              <Anchor href="mailto:contact@mini-genie.de" target="_blank">
                contact@mini-genie.de
              </Anchor>
            </List.Item>
            <List.Item>
              <strong>{t('support.feedback.rateTitle')}:</strong>{' '}
              {t('support.feedback.rateDescription')}
            </List.Item>
          </List>
        </Stack>
      </Container>
    </ScrollArea>
  );
};

export default SupportPage;
