import axios from 'axios';

export default class PaginationCache {
  constructor(pageSize = 100, fetcher = null) {
    this.pageSize = pageSize;
    this.pages = {};
    this.total = -1;
    this.fetcher = fetcher;
  }

  reset = () => {
    this.pages = {};
    this.total = -1;
  };

  fetchSize = () => new Promise((resolve, reject) => {
    if (this.total === -1) {
      this.fetcher(1, this.pageSize).then((result) => {
        this.pages[0] = result.data;
        this.total = result.data.total_entries;
        resolve(this.total);
      }).catch((err) => {
        reject(err);
      });
    } else {
      resolve(this.total);
    }
  });

  fetchPage = (page) => new Promise((resolve) => {
    if (this.pages[page]) {
      resolve(this.pages[page]);
    } else {
      this.fetcher(page + 1, this.pageSize).then((result) => {
        this.pages[page] = result.data;
        this.total = result.data.total_entries;
        resolve(this.pages[page]);
      });
    }
  });

  fetchPages = (start, end) => {
    const pages = [];
    for (let page = start; page <= end; page++) { // eslint-disable-line no-plusplus
      pages.push(this.fetchPage(page));
    }
    return pages;
  };

  fetchData = (startP, endP) => this.fetchSize().then(() => {
    const start = this.clamp(startP, 0, this.total);
    const end = this.clamp(endP, 0, this.total);
    if (start === end) {
      return new Promise((resolve) => resolve([])); // eslint-disable-line
    }
    const p0 = this.getPage(start);
    const p1 = this.getPage(end - 1);
    return axios.all(this.fetchPages(p0, p1)).then((results) => {
      const allData = results.map((result) => result.entries).flat();
      const startOffset = start - p0 * this.pageSize;
      const endOffset = end - p0 * this.pageSize;
      return allData.slice(startOffset, endOffset);
    });
  });

  clamp = (x, n, m) => Math.max(Math.min(x, m), n);

  getPage = (index) => Math.trunc(index / this.pageSize);
}
