interface IListView {
  listData: IListItem[];
}
interface IListItem {
  media: string;
  title: string;
  description: string;
  createdAt: string;
}

const ListView = (props: IListView) => {
  const { listData } = props;
  return (
    <div className="bg-purple-600 rounded-[10px] p-5 divide-y divide-purple-100 ">
      {listData.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </div>
  );
};

const ListItem = (props: IListItem) => {
  const { media, title, description, createdAt } = props;
  return (
    <div className="py-7 flex flex-col gap-3 text-white first:pt-0 last:pb-0 font-bold">
      <div className="flex justify-between text-[10px]">
        <span>{media}</span>
        <span>{createdAt}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-sm line-clamp-1">{title}</h2>
        <p className="text-xs line-clamp-2 font-normal">{description}</p>
      </div>
    </div>
  );
};

export default ListView;
