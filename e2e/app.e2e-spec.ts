import { ShopingassignPage } from './app.po';

describe('shopingassign App', () => {
  let page: ShopingassignPage;

  beforeEach(() => {
    page = new ShopingassignPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
