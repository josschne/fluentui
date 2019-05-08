import { createComponent } from '../../Foundation';
import { usePersonaCoinState } from './PersonaCoin.state';
import { PersonaCoinStyles } from './PersonaCoin.styles';
import { IPersonaCoinProps } from './PersonaCoin.types';
import { PersonaCoinView } from './PersonaCoin.view';

export const PersonaCoin: React.StatelessComponent<IPersonaCoinProps> = createComponent({
  displayName: 'PersonaCoin',
  view: PersonaCoinView,
  styles: PersonaCoinStyles,
  state: usePersonaCoinState
});
