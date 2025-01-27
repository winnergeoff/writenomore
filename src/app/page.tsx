import {
  Space
} from '@mantine/core';
import FeatureTitle from '../components/FeatureTitle/FeatureTitle';
import LargeHero from '../components/LargeHero/LargeHero';
import StatsRing from '@/components/StatsRing/StatsRing';
import SocialButtons from '@/components/SocialButtons/SocialButtons';

export default function Home() {
  return (
    <div>
      <LargeHero />
      <Space h="xl" />
      <FeatureTitle />
      <StatsRing />
      <SocialButtons />
    </div>
  );
}
