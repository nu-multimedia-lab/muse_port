import { Flask } from "@phosphor-icons/react/dist/ssr";

const BetaBanner = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg flex items-center">
      <Flask size={24} weight="duotone" className="mr-1" />
      <span className="text-sm font-medium mr-2">
        ベータ版のため一部機能が制限されています
      </span>
    </div>
  );
};

export default BetaBanner;
