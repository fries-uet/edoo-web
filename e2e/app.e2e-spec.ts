import { EdooWebPage } from './app.po';

describe('edoo-web App', () => {
  let page: EdooWebPage;

  beforeEach(() => {
    page = new EdooWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
