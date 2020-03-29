const generateuniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
   it('should generaet an unique ID', () =>{
    const id = generateuniqueId();
    expect(id).toHaveLength(8);
   });
});