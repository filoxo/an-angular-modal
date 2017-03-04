import { FiloModalPage } from './app.po';

describe('filo-modal App', () => {
  let page: FiloModalPage;

  beforeEach(() => {
    page = new FiloModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
