const PATTERN = /^\s*([+0-9/]+)\s*([\w\s]+)\s*\(([0-9d+\w ]*)(?:, ([0-9\-/x]*))?\)$/;

const dY = y => Math.ceil((Math.random() * 1e10) % y);
const XdY = (x, y) =>
  [...Array(x)].map(() => dY(y)).reduce((curr, last) => (curr += last));
const d20 = () => dY(20);

class DicesService {
  parse(content = '') {
    const lines = content.split('\n');
    const results = [];

    lines.forEach(line => {
      if (line) {
        results.push(this.analyse(line));
      }
    });

    return results;
  }

  analyse(line) {
    const matches = PATTERN.exec(line);

    const indexes = {
      1: this.attack,
      2: name => name,
      3: this.damage,
      4: this.critical
    };

    matches.forEach((match, idx) => {
      if (indexes[idx]) {
        indexes[idx](match);
      }
    });
  }

  attack(value) {
    const attacks = value.split('/');
    const results = [];

    attacks.forEach(attack => {
      results.push(d20() + parseInt(attack, 10));
    });

    return results;
  }

  damage(value) {
    const damages = value.split(/\s\+\s/);
    const results = [];

    damages.forEach(damage => {
      const match4dice = damage.match(/([0-9]*)d([0-9]+)/);

      if (match4dice) {
        results.push(
          XdY(parseInt(match4dice[1], 10), parseInt(match4dice[2], 10))
        );
      }
    });
  }
}

export default DicesService;
