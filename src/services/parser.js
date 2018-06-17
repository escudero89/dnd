const SEPARATOR = '---';

const RX_BASIC_INFO = /^# ([\w]+): ([\w\s]+) \(([A-Z]+)\), CR ([\d]+)$/m;
const RX_SECTION = /^## [\w]+$/m;

const RX_QUOTE = /^_(.*)_$/m;
const RX_PORTRAIT = /^(http(s)?:\/\/.+)$/m;

const RX_FLAVOR = /^([A-Z]+): (.+)$/gm;

class ParserService {
  static parseToNpcList(content) {
    const blocks = content.split(SEPARATOR);
    const list = [];

    blocks.forEach(block => {
      const npcService = new NpcService();

      npcService.fillBasicInfo(block.match(RX_BASIC_INFO).slice(1));

      const sections = block.split(RX_SECTION);
      console.info(sections);

      npcService.fillQuoteAndPortrait(sections[0]);
      npcService.fillDescription(sections[1]);
      npcService.fillFlavor(sections[2]);
      npcService.fillStats(sections[3]);

      if (sections[4]) {
        npcService.fillNotes(sections[4]);
      }
      console.info(npcService.npc);

      list.push(npcService.npc);
    });

    return list;
  }
}

class NpcService {
  constructor() {
    this.npc = new NPC();
  }

  fillBasicInfo(content) {
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

  static write(npc) {}
}

class NPC {
  schema = {
    role: 'string',
    name: 'string',
    alignment: 'string',
    cr: 'number',

    quote: 'string',
    portrait: 'string',

    description: 'string',
    flavor: 'object',

    stats: 'string',
    notes: 'string'
  };

  properties = {};

  add(property, value) {
    const field = this.schema[property];

    if (!field) {
      throw new Error(`invalid property "${property}"`);
    }

    if (typeof value !== field) {
      throw new Error(
        `invalid format "${typeof value}" for ${property} (requires "${field}")`
      );
    }

    this.properties[property] = value;
  }

  get(property) {
    return this.properties[property];
  }

  toString() {
    const {
      role,
      name,
      alignment,
      cr,
      quote,
      portrait,
      description,
      flavor,
      stats,
      notes
    } = this.properties;

    const printQuote = () => (quote ? `_${quote}_` : '');
    const printFlavor = () =>
      Object.keys(flavor)
        .map(key => `${key}: ${flavor[key]}`)
        .join('\n');

    return `
# ${role}: ${name} (${alignment}), CR ${cr}
${printQuote()}
${portrait ? portrait : ''}

## Description

${description}

## Flavor

${printFlavor()}

## Stats

${stats}

## Notes

${notes}
    `;
  }
}

export default ParserService;
