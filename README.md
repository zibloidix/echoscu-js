# echoscu-js
Парсер DICOM запроса ECHO-SCP на JavaScript. Принимает входящий поток и разбирает полученный буфер в соответствии со стандартом **"DICOM PS3.8 2017e - Network Communication Support for Message Exchange"** раздел PS3.8 > DICOM Upper Layer Protocol for TCP/IP > DICOM Upper Layer Protocol for TCP/IP Data Units Structure

Для запуска используем ```node index.js```

Пример вывода парсера:
```JavaScript
AssocRequest {
  name: 'A-ASSOCIATE-RQ PDU: ASSOC Request',
  buffer: {
    header: <Buffer 01 00 00 00 00 cd 00 01 00 00 47 52 56 44 5f 4d 41 49 4e 20 20 20 20 20 20 20 53 4f 4d 49 41 43 20 20 20 20 20 20 20 20 20 20 00 00 00 00 00 00 00 00 ... 23 more bytes>,
    body: <Buffer 10 00 00 15 31 2e 32 2e 38 34 30 2e 31 30 30 30 38 2e 33 2e 31 2e 31 2e 31 20 00 00 2e 01 00 ff 00 30 00 00 11 31 2e 32 2e 38 34 30 2e 31 30 30 30 38 ... 86 more bytes>
  },
  pduType: '0x01',
  pduLength: 205,
  protocolVersion: 1,
  calledEntryTitle: 'GRVD_MAIN',
  callingEntryTitle: 'SOMIAC',
  applicationContext: {
    itemType: '10',
    itemLength: 21,
    itemValue: '1.2.840.10008.3.1.1.1'
  },
  presentationContext: { itemType: '20', itemLength: 46, itemValue: 1 },
  abstractSyntax: { itemType: '30', itemLength: 17, itemValue: '1.2.840.10008.1.1' },
  transferSyntax: { itemType: '40', itemLength: 17, itemValue: '1.2.840.10008.1.2' },
  maxPDULength: { itemType: '51', itemLength: 4, itemValue: 16384 },
  implementationUID: {
    itemType: '52',
    itemLength: 27,
    itemValue: '1.2.276.0.7230010.3.0.3.6.2'
  },
  implementationVersion: { itemType: '55', itemLength: 15, itemValue: 'OFFIS_DCMTK_36' }
}

```

Ссылка на стандарт: [DICOM Upper Layer Protocol for TCP/IP Data Units Structure](http://dicom.nema.org/medical/dicom/2017e/output/chtml/part08/sect_9.3.html)

### Figure 9-1. Protocol Data Units Structure and Encoding
<img src="http://dicom.nema.org/medical/dicom/2017e/output/chtml/part08/figures/PS3.8_9-1.svg">

### Figure 9-2. Protocol Data Units Structure and Encoding
<img src="http://dicom.nema.org/medical/dicom/2017e/output/chtml/part08/figures/PS3.8_9-2.svg">


## Возможные значения для this.pduTypes
- 0x01 - A-ASSOCIATE-RQ PDU: ASSOC Request
- 0x02 - A-ASSOCIATE-AC PDU: ASSOC Accept
- 0x03 - A-ASSOCIATE-RJ PDU: ASSOC Reject
- 0x04 - P-DATA-TF PDU: Data
- 0x05 - A-RELEASE-RQ PDU: RELEASE Request
- 0x06 - A-RELEASE-RP PDU: RELEASE Response
- 0x07 - A-ABORT PDU
