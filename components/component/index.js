import classNames from 'classnames'
import { Link } from 'components/link'
import styles from './index.module.scss'

export function Component() {
  return (
    <Link href="/" className={classNames(styles.component)}>
      <span>Component</span>
    </Link>
  );
}
