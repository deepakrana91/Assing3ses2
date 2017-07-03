import { Assin3ses2Page } from './app.po';

describe('assin3ses2 App', () => {
  let page: Assin3ses2Page;

  beforeEach(() => {
    page = new Assin3ses2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
