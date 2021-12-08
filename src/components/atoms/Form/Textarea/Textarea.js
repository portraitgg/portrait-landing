import PropTypes from 'prop-types'
import cx from 'classnames'
import { MdError } from 'react-icons/md'

// import styles from './Input.module.css'

const Textarea = ({ label, id, name, value, placeholder, hasError, errorText, onChange }) => {
  return (
    <div>
      {label ? (
        <label htmlFor={id} className="block text-lg font-medium text-white mb-4">
          {label}
        </label>
      ) : null}
      <div className="relative rounded-lg">
        <textarea
          name={name}
          id={id}
          className={cx(
            'block w-full pl-6 pr-12 py-4 bg-gray-900 text-lg border rounded-lg',
            'focus:outline-none',
            {
              'border-gray-600 text-white placeholder-gray-400': !hasError,
              'border-red-400 focus:ring-red-500 focus:border-red-500': hasError
            }
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {hasError ? (
          <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
            <MdError size="1.25rem" className="text-red-400" aria-hidden="true" />
          </div>
        ) : null}
      </div>
      {errorText ? <p className="mt-3 text-sm text-red-400">{errorText}</p> : null}
    </div>
  )
}

Textarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  onChange: PropTypes.func
}

Textarea.defaultProps = {
  label: '',
  id: '',
  name: '',
  value: '',
  placeholder: '',
  hasError: false,
  errorText: '',
  onChange: null
}

export { Textarea }
