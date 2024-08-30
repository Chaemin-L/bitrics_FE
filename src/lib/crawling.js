import axiosInstance from "@/api/axiosInstance";
import axios from "axios";
import { load } from "cheerio";

export const getHTML = async () => {
  try {
    const html = await axiosInstance
      .get("/search/news?query=%EA%B0%80%EC%83%81%ED%99%94%ED%8F%90")
      .then((res) => res.data);
    // console.log(html);
    return html;
  } catch {
    console.log("에러발생");
    // TODO: go back to previous page
  }
};

export const getNews = async () => {
  const html = await getHTML();
  const $ = load(html);
  // const $newsItems = $("ul.article")
  const newsTitle = [];
  $(".txt_wrap").each((div, elem) => {
    console.log($(this).children("a").children("em").text());
    newsTitle.push($(this).children("a").children("em").text());
  });
  console.log(newsTitle);
};
