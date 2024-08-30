import DaliyTerm from "@/components/term/dailyTerm";

const TermPage = () => {
  return (
    <>
      <div className="mb-3">
        <h3 className="text-white text-xs font-semibold">용어카드를 뒤집어 뜻을 확인해보세요!
        </h3>
      </div>
      <div>
        <DaliyTerm />
      </div>
    </>
  )
}

  export default TermPage;