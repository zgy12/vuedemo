import { createPinia } from 'pinia';
import { App } from 'vue';
export const store = createPinia();

export const setupPinia = (app: App) => {
  app.use(store);
};
