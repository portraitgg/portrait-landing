import PropTypes from 'prop-types'

import Filecoin from './Logos/Filecoin'
import IPFS from './Logos/IPFS'

function Logos({ name, width, height }) {
  return (
    <div style={{ width, height }}>
      {
        {
          filecoin: <Filecoin />,
          ipfs: <IPFS />
        }[name]
      }
    </div>
  )
}

Logos.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}

Logos.defaultProps = {
  width: '64px',
  height: 'auto'
}

export { Logos }
