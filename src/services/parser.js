const SEPARATOR = '---';

const RX_BASIC_INFO = /^# ([\w]+): ([\w\s]+) \(([A-Z]+)\), CR ([\d]+)$/m;
const RX_SECTION = /^## [\w]+$/m;

class ParserService {
  static parseToNpcList(content) {
    const blocks = content.split(SEPARATOR);
    const list = [];

    blocks.forEach(block => {
      const npcService = new NpcService();

      npcService.fillBasicInfo(block.match(RX_BASIC_INFO).slice(1));

      const sections = block.split(RX_SECTION);

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
    this.npc.add('cr', parseInt(content[3]), 10);
  }

  static write(npc) {}
}

class NPC {
  schema = {
    role: 'string',
    name: 'string',
    alignment: 'string',
    cr: 'number'
  };

  properties = {};

  add(property, value) {
    const field = this.schema[property];

    if (!field) {
      throw new Error(`invalid property ${property}`);
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
    const { role, name, alignment, cr } = this.properties;

    return `
      # ${role}: ${name} (${alignment}), CR ${cr}
    `;
  }
}

export default ParserService;
