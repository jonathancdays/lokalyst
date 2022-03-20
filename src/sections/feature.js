/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'SEO Web Design',
    title: 'SEO Web Design',
    text:
      'We will create a comprehensive website SEO strategy and manage the website launch to ensure the best possible outcome.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Speed Optimization',
    title: 'Speed Optimization',
    text:
      'We can work with your existing developer or bring in our dev team to optimize your website’s speed performance.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pentaly Recovery',
    title: 'Penalty Recovery',
    text:
      'Assess your site for penalties, address any identified issues',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Video SEO',
    title: 'Video SEO',
    text:
      'Align align unique large-scale platforms with your larger SEO and digital strategy.',
  },
];

export default function Feature() {
  return (
    <section sx={{variant: 'section.feature'}}>
      <Container>
        <SectionHeader
        slogan= "Primary Features"
        title= "What we can and will do for you"
        />

        <Grid sx={styles.grid}>
          {data.map((item) =>
            <FeatureCard 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text} 
            />
          )}
        </Grid>
      </Container>

    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
