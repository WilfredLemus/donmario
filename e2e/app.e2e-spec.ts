import { DonmarioPage } from './app.po';

describe('donmario App', () => {
  let page: DonmarioPage;

  beforeEach(() => {
    page = new DonmarioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
