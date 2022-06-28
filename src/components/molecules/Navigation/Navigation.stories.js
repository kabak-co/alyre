import { Navigation } from './Navigation';

export default {
    title: 'molecules/Navigation',
    component: Navigation,
};

const Template = ({children, ...args}) => <Navigation {...args}><a href='#'>{children}</a></Navigation>;

export const Default = Template.bind({});
Default.args = {
    children:'Click me',
    type: 'default'
};