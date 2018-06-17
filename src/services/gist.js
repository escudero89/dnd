import Gists from 'gists';
import config from '../config/gist';

class GistService {
  constructor() {
    this.gists = new Gists({
      token: config.token
    });

    this.id = config.id;
  }

  download() {
    return new Promise((resolve, reject) => {
      this.gists.download({ id: this.id }, (err, res) => {
        if (err) {
          return reject(err);
        }

        console.log(res);
        return resolve(res);
      });
    });
  }
}

export default GistService;
