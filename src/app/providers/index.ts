import { compose } from '@/shared/helpers';
import { withRouter } from './with-router';

export const withProviders = compose(withRouter);
