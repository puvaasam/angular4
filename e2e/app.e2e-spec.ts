import { UALCCOPage } from './app.po';

describe('ual-cco App', () => {
  let page: UALCCOPage;

  beforeEach(() => {
    page = new UALCCOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
