import PropTypes from 'prop-types'

import styles from './Categories.module.css'

function Block({ children }) {
  return (
    <div
      className={`${styles['marquee-item']} inline-flex items-center justify-center w-60 md:w-72 px-2 md:px-3`}
    >
      <div className="flex-1 flex items-center justify-center h-full bg-gradient-to-br from-gray-900 to-black border rounded-lg border-gray-700 filter mix-blend-screen">
        <p className="text-lg md:text-2xl font-bold text-white">{children}</p>
      </div>
    </div>
  )
}

Block.propTypes = {
  children: PropTypes.node.isRequired
}

function Categories({ items, scrollDirection = 'left' }) {
  return (
    <div className={styles.marquee}>
      <div className={styles['marquee-wrap']}>
        <div
          className={`${styles['marquee-content']} ${
            scrollDirection === 'right' ? 'justify-end' : null
          }`}
        >
          <div
            className={`${styles[`marquee-scroll-${scrollDirection}`]} inline-flex font-heading`}
          >
            {items.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Block key={`${item}-${index}`}>{item}</Block>
            ))}
            {items.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Block key={`${item}-${index}`}>{item}</Block>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollDirection: PropTypes.oneOf(['left', 'right'])
}

Categories.defaultProps = {
  scrollDirection: 'left'
}

export { Categories }
