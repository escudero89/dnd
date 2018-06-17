import Gists from 'gists';
import token from '../config/token';

class GistService {
  constructor() {
    this.gists = new Gists({
      token: token
    });

    this.id = '16bbb227af56db82f263464dde8e852b';
  }

  download() {
    this.gists.download({ id: this.id }, (err, res) => {
      console.log(res);
    });
  }
}

export default GistService;
