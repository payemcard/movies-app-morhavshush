import {Button} from "../../../ui-elements/button";

interface TabsProps {
  tabs: string[];
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
}
const Tabs = ({tabs, selectedGenre, setSelectedGenre}: TabsProps) => {
  return (
    <div className="w-full pb-4">
      <div className="flex justify-center">
        {tabs.map((tab: any) => (
          <Button
            variant="tab"
            key={tab}
            onClick={() => {
              setSelectedGenre(tab);
            }}
            className={
              selectedGenre === tab
                ? "border-b-2 border-primary text-purple"
                : ""
            }
          >
            {tab}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
