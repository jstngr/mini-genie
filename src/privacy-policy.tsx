import React from 'react';
import { Container, Title, Text, List, Anchor, Divider, Stack, ScrollArea } from '@mantine/core';

const PrivacyPolicy = () => (
  <ScrollArea scrollbars="y">
    <Container pt="2rem" pb="4rem" px="1rem">
      <Stack gap="md">
        <Title order={1} ta="center">
          Privacy Policy
        </Title>
        <Text align="center" c="dimmed">
          Effective Date: <strong>16.12.2024</strong>
        </Text>

        <Divider my="lg" />

        {/* Welcome Section */}
        <Title order={2}>Welcome to Still App</Title>
        <Text>
          Welcome to <strong>Still App</strong> ({'"'}we,{'"'} {'"'}our,{'"'} {'"'}us{'"'}). This
          Privacy Policy explains how we collect, use, and safeguard your information when you use
          our app.
        </Text>

        {/* Section 1 */}
        <Title order={3}>1. Information We Collect</Title>
        <Text>
          Our app does not collect or process personal data directly. However, third-party services
          such as AdMob may collect certain information, including:
        </Text>
        <List withPadding>
          <List.Item>
            <strong>Device Information:</strong> Such as your device ID, operating system, and IP
            address.
          </List.Item>
          <List.Item>
            <strong>Usage Data:</strong> Information about your interactions with ads.
          </List.Item>
          <List.Item>
            <strong>Location Data:</strong> Approximate location (e.g., country or region) based on
            your IP address.
          </List.Item>
        </List>

        {/* Section 2 */}
        <Title order={3}>2. How AdMob Uses Your Information</Title>
        <Text>
          AdMob, a third-party advertising service, collects and uses data to provide personalized
          and non-personalized ads. Data collected may include:
        </Text>
        <List withPadding>
          <List.Item>Demographic and interest data for personalized ads.</List.Item>
          <List.Item>Contextual information for non-personalized ads.</List.Item>
        </List>
        <Text>
          You can learn more about AdMob{"'"}s privacy practices here:{' '}
          <Anchor href="https://policies.google.com/privacy" target="_blank">
            https://policies.google.com/privacy
          </Anchor>
        </Text>

        {/* Section 3 */}
        <Title order={3}>3. Your Choices</Title>
        <Text>You have the option to opt-out of personalized advertising:</Text>
        <List withPadding>
          <List.Item>
            <strong>On Android:</strong> Go to {'"'}Settings{'"'} &gt; {'"'}Google{'"'} &gt; {'"'}
            Ads
            {'"'} and enable {'"'}Opt out of Ads Personalization.{'"'}
          </List.Item>
          <List.Item>
            <strong>On iOS:</strong> Go to {'"'}Settings{'"'} &gt; {'"'}Privacy{'"'} &gt; {'"'}
            Advertising{'"'} and enable
            {'"'}Limit Ad Tracking.{'"'}
          </List.Item>
        </List>

        {/* Section 4 */}
        <Title order={3}>4. Data Retention</Title>
        <Text>
          We do not collect or store any personal data. AdMob retains data in accordance with its
          privacy policy.
        </Text>

        {/* Section 5 */}
        <Title order={3}>5. Security</Title>
        <Text>
          We do not process or store data, but we ensure that AdMob complies with applicable privacy
          regulations.
        </Text>

        {/* Section 6 */}
        <Title order={3}>6. Changes to This Privacy Policy</Title>
        <Text>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page.
        </Text>

        {/* Section 7 */}
        <Title order={3}>7. Contact Us</Title>
        <Text>
          If you have questions about this Privacy Policy, please contact us:{' '}
          <Anchor href="mailto:contact@mini-genie.de" target="_blank">
            contact@mini-genie.de
          </Anchor>
        </Text>
      </Stack>
    </Container>
  </ScrollArea>
);

export default PrivacyPolicy;
