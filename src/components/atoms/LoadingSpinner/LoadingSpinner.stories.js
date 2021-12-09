import { LoadingSpinner } from '.'

export default {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner
}

const Template = (args) => <LoadingSpinner {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'black'
}
