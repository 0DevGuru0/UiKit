import { Footer } from './Footer';
import { footerConfig } from './Footer/footer.config';

export default {
  title: 'Atoms / Footer',
  component: Footer,
  parameters: {
    background: { noPadding: true },
  },
};

export const FooterComponent = () => <Footer narrowPadding footerConfig={footerConfig} />;
