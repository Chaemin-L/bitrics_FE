import { getNews } from "@/lib/crawling";
import { INews } from "@/pages/news";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";

interface IListView {
  selected: string;
}

const ListView = (props: IListView) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [news, setNews] = useState<INews[]>([]);
  const { selected } = props;

  const getData = useCallback(async () => {
    setIsLoading(true);
    await getNews(selected).then((res) => setNews(res));
    setIsLoading(false);
  }, [selected]);

  useEffect(() => {
    getData();
  }, [selected, getData]);

  return (
    <div className="bg-purple-600 rounded-[10px] p-5 divide-y divide-purple-100 w-full min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        news.map((item, index) => <ListItem key={index} {...item} />)
      )}
    </div>
  );
};

const ListItem = (props: INews) => {
  const { media, title, content, createdAt, href } = props;
  return (
    <Link
      to={href}
      className="py-7 flex flex-col gap-3 text-white first:pt-0 last:pb-0 font-bold group"
    >
      <div className="flex justify-between text-[10px]">
        <span>{media}</span>
        <span>{createdAt}</span>
      </div>
      <div className="flex flex-col gap-2 group-hover:underline">
        <h2 className="text-sm line-clamp-1">{title}</h2>
        <p className="text-xs line-clamp-2 font-normal">{content}</p>
      </div>
    </Link>
  );
};

export default ListView;
