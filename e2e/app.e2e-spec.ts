import { SA44Day2Page } from './app.po';

describe('sa44-day2 App', () => {
  let page: SA44Day2Page;

  beforeEach(() => {
    page = new SA44Day2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
