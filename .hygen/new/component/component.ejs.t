---
to: <%= absPath %><%= h.inflection.camelize(component_name) %>/<%= h.inflection.camelize(component_name) %>.js
---
<% ComponentName = h.inflection.camelize(component_name) -%>
import PropTypes from 'prop-types'

// Custom styles, uncomment if needed
// import styles from './<%= ComponentName %>.module.css'

function <%= ComponentName %>() {
  return (
    <div className="">
      {/* Code here */}
    </div>
  )
}

<%= ComponentName %>.propTypes = {}

export { <%= ComponentName %> }
