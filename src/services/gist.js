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

  upload(content) {
    return new Promise((resolve, reject) => {
      this.gists.edit(
        {
          id: this.id,
          files: {
            [config.filename]: {
              content: content
            }
          }
        },
        (err, res) => {
          if (err) {
            return reject(err);
          }

          console.log(res);
          return resolve(res);
        }
      );
    });
  }

  uploadNpcList(npcList) {
    const content = [];
    npcList.forEach(npc => {
      content.push(npc.write());
    });

    this.upload(content.join('\n---\n'));
  }
}

export default GistService;
