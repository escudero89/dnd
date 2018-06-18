import Npc from '../models/npc';

const RX_BASIC_INFO = /^# ([\w]+): ([\w\s]+) \(([A-Z]+)\), CR ([\d]+)$/m;

const RX_QUOTE = /^_(.*)_$/m;
const RX_PORTRAIT = /^(http(s)?:\/\/.+)$/m;

const RX_FLAVOR = /^([A-Z]+[A-Z\s]+): (.+)$/gm;

class NpcService {
  constructor() {
    this.npc = new Npc();
  }

  fillBasicInfo(block) {
    const content = block.match(RX_BASIC_INFO).slice(1);

    this.npc.add('role', content[0]);
    this.npc.add('name', content[1]);
    this.npc.add('alignment', content[2]);
    this.npc.add('cr', parseInt(content[3], 10));
  }

  fillQuoteAndPortrait(content) {
    this.npc.add('quote', content.match(RX_QUOTE).slice(1)[0] || '');
    this.npc.add('portrait', content.match(RX_PORTRAIT).slice(1)[0] || '');
  }

  fillDescription(content) {
    this.npc.add('description', content.trim());
  }

  fillFlavor(content) {
    const flavor = {};
    let matches;

    while ((matches = RX_FLAVOR.exec(content))) {
      flavor[matches[1]] = matches[2];
    }

    this.npc.add('flavor', flavor);
  }

  fillStats(content) {
    this.npc.add('stats', content.trim());
  }

  fillNotes(content) {
    this.npc.add('notes', content.trim());
  }
}

export default NpcService;
