import PropTypes from 'prop-types'

function Circle({ color, size, blur, className, style }) {
  return (
    <div
      className={`absolute rounded-full filter pointer-events-none ${className}`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        '--tw-blur': `blur(${blur})`,
        zIndex: '-1',
        ...style
      }}
    />
  )
}

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  blur: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({})
}

Circle.defaultProps = {
  className: '',
  style: {}
}

export { Circle }
