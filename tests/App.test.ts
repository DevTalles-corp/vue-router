import { mount, shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router';

describe('<App />', () => {
  test('should be render correctly with RouterView', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });

    const routerView = wrapper.findComponent({ name: 'RouterView' });

    // console.log(wrapper.html());
    expect(routerView.exists()).toBe(true);
  });
});
