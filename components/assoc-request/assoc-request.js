class AssocRequest {
	constructor(buffer) {
		this.name = 'A-ASSOCIATE-RQ PDU: ASSOC Request';
		this.buffer = this.getBuffer(buffer);
		this.pduType = '0x01',
		this.pduLength = this.getPduLength();
		this.protocolVersion = this.getProtocolVersion();
		this.calledEntryTitle = this.getCalledEntryTitle();
		this.callingEntryTitle = this.getCallingEntryTitle();
    this.applicationContext = this.getItem('10', this.parseValueToStr);
    this.presentationContext = this.getItem('20', this.parseValueToInt, 1);
    this.abstractSyntax = this.getItem('30', this.parseValueToStr);
    this.transferSyntax = this.getItem('40', this.parseValueToStr);
    //this.userInfo = this.getItem('50');
    this.maxPDULength =  this.getItem('51', this.parseValueToInt);
    this.implementationUID = this.getItem('52', this.parseValueToStr);
    this.implementationVersion = this.getItem('55', this.parseValueToStr);
  }
  
  getBuffer(buffer) {
    return {
      header: buffer.slice(0,73),
      body: buffer.slice(74, buffer.length - 1)
    }
  }

	getPduLength() {
		return this.buffer.header.readUIntBE(2,4);
	}

	getProtocolVersion() {
		return this.buffer.header.readUIntBE(6,2);
	}

	getCalledEntryTitle() {
		return this.buffer.header.toString('utf8', 10, 26).trim();
	}

	getCallingEntryTitle() {
		return this.buffer.header.toString('utf8', 26, 42).trim();
  }
  
	getItem(code, parseFunction, valueLength) {
		const itemTypePosition = this.buffer.body.indexOf(`${code}00`, 'hex');
		const itemLengthPosition = itemTypePosition + 2;
		const itemValuePosition = itemLengthPosition + 2;

		const itemType = this.buffer.body[itemTypePosition].toString(16);
    const itemLength = this.buffer.body.readUIntBE(itemLengthPosition, 2);
    const itemValueLength = valueLength ? itemValuePosition + valueLength : itemValuePosition + itemLength;
		const itemValue = parseFunction(this.buffer.body.slice(itemValuePosition, itemValueLength));
    
    return {
			itemType,
			itemLength,
			itemValue
		};
  }
  
  parseValueToStr(itemValue) {
    return itemValue.toString('utf8');
  }

  parseValueToInt(itemValue) {
    return itemValue.readUIntBE(0, itemValue.length);
  }

	static getInstance(buffer) {
		const type = 0x01;
		if (buffer[0] === type) {
			return new AssocRequest(buffer);
		}
	}

}

module.exports = AssocRequest;
