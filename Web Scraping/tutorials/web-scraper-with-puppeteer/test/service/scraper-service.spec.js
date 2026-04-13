const { getBookInfoByName } = require('../../src/service/scraper-service');

describe('scraper-service', () => {
  test("should be able to retrieve info for a book that is close to the first page", async function() {
    let info = await getBookInfoByName('black dust');

    expect(info).not.toBeUndefined();
    expect(info.title).toBe('Black Dust');
  });

  test('should be able to retrieve info for a book that is in the last page', async () => {
    const info = await getBookInfoByName('emma');

    expect(info).not.toBeUndefined();
    expect(info.title).toBe('Emma');
  });
});