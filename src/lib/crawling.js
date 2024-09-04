import axiosInstance from "@/api/axiosInstance";
import { load } from "cheerio";

export const getHTML = async (keyword) => {
  try {
    const html = await axiosInstance
      .get(`/search/news?query=${encodeURI(keyword)}`)
      .then((res) => res.data);
    return html;
  } catch {
    console.log("에러발생");
    // TODO: go back to previous page
  }
};

export const getNews = async (keyword) => {
  const html = await getHTML(keyword);
  const $ = load(html);

  try {
    const newsList = $(".article .txt_wrap")
      .map(function (i, el) {
        const title = $(el)._findBySelector("a > em.tit").text();
        const content = $(el)._findBySelector("a > p.txt").text();
        const href = $(el)._findBySelector("a").attr("href");
        const media = $(el)._findBySelector("p.info span:first").text();
        const createdAt = $(el)._findBySelector("p.info span:last").text();
        let thumbnail = $(el)._findBySelector(".thumbnail img").attr("src");
        thumbnail = thumbnail.startsWith("//") ? null : thumbnail;
        return { title, content, href, media, createdAt, thumbnail };
      })
      .toArray();
    return newsList;
  } catch (e) {
    // 검색 결과가 없을 경우
    return [];
  }
};
