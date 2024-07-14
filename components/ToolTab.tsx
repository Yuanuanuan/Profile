interface ToolTabProps {
  tool: string;
}

export default function ToolTab({ tool }: ToolTabProps) {
  return (
    <div className="px-3 py-1 text-xs font-bold text-primary bg-primary bg-opacity-20 rounded-full">
      {tool}
    </div>
  );
}
