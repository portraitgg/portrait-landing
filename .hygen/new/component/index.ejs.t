---
to: <%= absPath %>/<%= h.inflection.camelize(component_name) %>/index.js
---
export * from './<%= h.inflection.camelize(component_name) %>'
