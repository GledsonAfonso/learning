const cheerio = require('cheerio');
const { get } = require('./http-service');

const URL = 'http://books.toscrape.com';

const _getHtml = (uri) => {
  const fullUrl = `${URL}/catalogue/${uri.replace('catalogue/', '')}`;
  return get(fullUrl);
};

const _getBooksInfo = (html) => {
  let $ = cheerio.load(html);
  const articleElements = $('ol.row').find('li article');
  
  const infos = articleElements.map((_, articleElement) => {
    const rating = $(articleElement).find('p').attr('class').replace('star-rating ', '');
    const title = $(articleElement).find('h3 a').attr('title');
    const priceElement = $(articleElement).find('div.product_price');
    const price = $(priceElement).find('p.price_color').text();
    const availability = $(priceElement).find('p.instock').text().trim();

    return { rating, title, price, availability };
  }).toArray();
  
  return infos;
};

const _getNextPageButtonUri = (html) => {
  let $ = cheerio.load(html);
  const nextPageButtonElement = $('ul.pager').find('li.next a');
  const uri = $(nextPageButtonElement).attr('href');
  return uri;
};

const _getBookByName = (booksInfo, name) => {
  const books = booksInfo.filter(bookInfo => bookInfo.title.toLowerCase() == name.toLowerCase());

  if (books) {
    return books[0];
  } else {
    return undefined;
  }
};

const getBookInfoByName = async (name, html) => {
  if (!html) {
    html = await _getHtml('page-1.html');
  }
  
  const booksInfo = _getBooksInfo(html);
  const book = _getBookByName(booksInfo, name);

  if (book) {
    return book;
  } else {
    const uri = _getNextPageButtonUri(html);

    if (uri) {
      html = await _getHtml(uri);
      return await getBookInfoByName(name, html);
    }
  }
};

module.exports = { getBookInfoByName };