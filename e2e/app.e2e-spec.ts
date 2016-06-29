import { TennisApp2Page } from './app.po';

describe('tennis-app2 App', function() {
  let page: TennisApp2Page;

  beforeEach(() => {
    page = new TennisApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
