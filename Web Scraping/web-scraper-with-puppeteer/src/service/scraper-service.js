const puppeteer = require('puppeteer');

const URL = 'http://books.toscrape.com';

const _getUrl = (uri) => `${URL}/catalogue/${uri.replace('catalogue/', '')}`;

const _getBooks = async (page, url) => {
  await page.goto(url);

  const articleElements = await page.$$('ol.row li article');

  const promises = await articleElements.map(async (articleElement) => {
    const paragraphElement = await articleElement.$('p');
    const rating = await paragraphElement.evaluate((element) => element.className.replace('star-rating ', ''));

    const titleElement = await articleElement.$('h3 a');
    const title = await titleElement.evaluate((element) => element.getAttribute('title'));
    
    const priceElement = await articleElement.$('div.product_price');
    const priceValueElement = await priceElement.$('p.price_color');
    const price = await priceValueElement.evaluate((element) => element.innerText);
    
    const availabilityElement = await priceElement.$('p.instock');
    const availability = await availabilityElement.evaluate((element) => element.innerText.trim());
    
    return { rating, title, price, availability };
  });

  const books = await Promise.all(promises);

  return books;
};

const _findBookByName = (books, name) => {
  const filteredBooks = books.filter(bookInfo => bookInfo.title.toLowerCase() == name.toLowerCase());
  return filteredBooks?.[0];
};

const _getBookByName = async (page, name, url) => {
  if (!url) {
    url = _getUrl('page-1.html');
  }
  
  const books = await _getBooks(page, url);
  const book = _findBookByName(books, name);

  if (book) {
    return book;
  } else {
    const nextButtonElement = await page.$('ul.pager li.next a');
    const uri = await nextButtonElement.evaluate(element => element.getAttribute('href'));
    
    if (uri) {
      url = _getUrl(uri);
      return await _getBookByName(page, name, url);
    }

    return undefined;
  }
};

const getBookInfoByName = async (name) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const book = await _getBookByName(page, name);
  
  await browser.close();
  
  return book;
};

module.exports = { getBookInfoByName };