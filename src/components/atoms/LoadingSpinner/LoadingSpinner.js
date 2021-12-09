import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './LoadingSpinner.module.css'

function LoadingSpinner({ size, color }) {
  return (
    <div
      className={cx(styles.spinner, {
        [`text-${color}`]: color,
        'text-current': !color
      })}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

LoadingSpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

LoadingSpinner.defaultProps = {
  color: null,
  size: '24'
}

export { LoadingSpinner }
