import { IKeyword, INews } from "@/pages/news";
import { useCallback, useEffect, useState } from "react";
import Loading from "../common/Loading";
import axiosInstance from "@/api/axiosInstance";

interface IListView {
  selected: IKeyword;
}

const ListView = (props: IListView) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [news, setNews] = useState<INews[]>([]);
  const { selected } = props;

  const getData = useCallback(async () => {
    setIsLoading(true);
    await axiosInstance
      .get(`/news?keyword=${encodeURIComponent(selected.label)}`)
      .then((res) => setNews(res.data as INews[]));
    setIsLoading(false);
  }, [selected]);

  useEffect(() => {
    getData();
    console.log(news);
  }, [selected]);

  return (
    <div className="bg-purple-600 rounded-[10px] p-5 divide-y divide-purple-100 w-full min-h-screen items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {news.length === 0 && (
            <div className="text-white text-center">
              통신 중 에러가 발생했어요. 다시 시도해주세요.
            </div>
          )}
          {news.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </>
      )}
    </div>
  );
};

const ListItem = (props: INews) => {
  const { media, title, content, createdAt, href, thumbnail } = props;
  return (
    <a
      href={href}
      target="_blank"
      className="py-7 flex flex-col gap-3 text-white first:pt-0 last:pb-0 font-bold group"
    >
      <div className="flex justify-between text-[10px]">
        <span>{media}</span>
        <span>{createdAt}</span>
      </div>
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col gap-2 group-hover:underline group-hover:underline-offset-2">
          <h2 className="text-sm line-clamp-1">{title}</h2>
          <p className="text-xs line-clamp-2 font-normal">{content}</p>
        </div>
        {thumbnail && (
          <img
            className="min-w-[100px]  object-cover h-[60px]"
            src={thumbnail}
          />
        )}
      </div>
    </a>
  );
};

export default ListView;
