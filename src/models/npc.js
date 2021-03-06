class Npc {
  schema = {
    name: 'string',

    age: 'number',
    alignment: 'string',
    cr: 'number',
    role: 'string',

    quote: 'string',
    portrait: 'string',

    description: 'string',
    flavor: 'object',
    appearance: 'string',

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

  write() {
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

## Description

${description}

## Flavor

${printFlavor()}

## Stats

${stats}

## Notes

${notes}
    `;
  }
}

export default Npc;
