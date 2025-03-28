import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { ButtonCopy } from './ButtonCopy';

export default { title: 'ButtonCopy' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ButtonCopy} />;
}
