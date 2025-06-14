
interface BlurredCardProps {
  children: React.ReactNode;
  className?: string;
}

const BlurredCard: React.FC<BlurredCardProps> = ({
  children,
  className = "w-[300px] md:w-[340px] h-[450px]",
}) => {
  return (
    <div
      className={["group j_card relative rounded-2xl p-5 hover:bg-cardBg bg-[#0D0D0D] bg-cover bg-no-repeat transition-transform transform duration-300", className].join(" ")}
    >
      {/* Background Shape */}
      <div className="absolute left-[-1px] bottom-[-2px] background-size-[110%] inset-0 z-[-1] bg-hoverCardBg bg-cover bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
        <div className="absolute w-full h-full bg-bottom bg-no-repeat transform translate bottom-0"></div>
      </div>

      <div className="card_content h-full">
        {/* Here we pass the children (full card structure) */}
        {children}
      </div>
    </div>
  );
};

export default BlurredCard;
