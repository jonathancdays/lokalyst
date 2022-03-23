/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Drive Web Traffic",
    title: "Drive Web Traffic",
    text: "Increase organic traffic to your site.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Leaders in industry",
    title: "Become the authority in your industry",
    text: "Get ahead of the competition by leading from their searches.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Convert into leads",
    title: "Help convert your website visitors into leads",
    text: "Natural search results generate natural leads",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Connect with your target audience",
    title: "Connect with your target audience",
    text:
      "Create unique, valuable insights that can only come from you, not your competitors.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="High Quality Returns"
          title="Achieve these results"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
