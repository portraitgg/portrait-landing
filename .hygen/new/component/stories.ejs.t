---
to: <%= absPath %><%= h.inflection.camelize(component_name) %>/<%= h.inflection.camelize(component_name) %>.stories.js
---
<% ComponentName = h.inflection.camelize(component_name) -%>
import { <%= ComponentName %> } from '.'

export default {
  title: '<%= h.inflection.camelize(level) %>/<%= ComponentName %>',
  component: <%= ComponentName %>
}

const Template = (args) => <<%= ComponentName %> {...args} />

export const Default = Template.bind({})
