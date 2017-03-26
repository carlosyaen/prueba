import { JenkinsInfraMonitorPage } from './app.po';

describe('jenkins-infra-monitor App', function() {
  let page: JenkinsInfraMonitorPage;

  beforeEach(() => {
    page = new JenkinsInfraMonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
