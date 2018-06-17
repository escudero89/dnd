import NpcService from './npc';

const SEPARATOR = '---';
const RX_SECTION = /^## [\w]+$/m;

class ParserService {
  static parseToNpcList(content) {
    const blocks = content.split(SEPARATOR);
    const list = [];

    blocks.forEach(block => {
      const npcService = new NpcService();

      npcService.fillBasicInfo(block);

      const sections = block.split(RX_SECTION);

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

export default ParserService;
